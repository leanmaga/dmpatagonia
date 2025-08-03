// app/api/admin/reviews/route.js (Para App Router)
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Review from '../../../models/Review';

export async function GET(request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'pending';
    
    let query = {};
    if (status === 'pending') query.isApproved = false;
    if (status === 'approved') query.isApproved = true;
    
    const reviews = await Review.find(query)
      .sort({ createdAt: -1 })
      .limit(50);
    
    return NextResponse.json({ success: true, data: reviews });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function PATCH(request) {
  await dbConnect();

  try {
    const body = await request.json();
    const { reviewId, action } = body;
    
    if (!reviewId || !action) {
      return NextResponse.json({ 
        success: false, 
        error: 'reviewId y action son requeridos' 
      }, { status: 400 });
    }

    let updateData = {};
    
    if (action === 'approve') {
      updateData.isApproved = true;
    } else if (action === 'reject') {
      updateData.isApproved = false;
    } else {
      return NextResponse.json({ 
        success: false, 
        error: 'Acción inválida' 
      }, { status: 400 });
    }

    const review = await Review.findByIdAndUpdate(
      reviewId, 
      updateData, 
      { new: true }
    );

    if (!review) {
      return NextResponse.json({ 
        success: false, 
        error: 'Review no encontrada' 
      }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: review });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  await dbConnect();

  try {
    const body = await request.json();
    const { reviewId } = body;
    
    if (!reviewId) {
      return NextResponse.json({ 
        success: false, 
        error: 'reviewId es requerido' 
      }, { status: 400 });
    }

    const review = await Review.findByIdAndDelete(reviewId);

    if (!review) {
      return NextResponse.json({ 
        success: false, 
        error: 'Review no encontrada' 
      }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Review eliminada exitosamente' 
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}