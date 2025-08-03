// app/api/reviews/route.js
import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Review from "../../../models/Review";

export async function GET() {
  try {
    await dbConnect();

    const reviews = await Review.find({ isApproved: true })
      .sort({ createdAt: -1 })
      .limit(20);

    return NextResponse.json({ success: true, data: reviews });
  } catch (error) {
    console.error("Error in GET /api/reviews:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, handle, rating, message } = body;

    console.log("Received data:", { name, handle, rating, message });

    // Validaciones
    if (!name || !rating) {
      return NextResponse.json(
        {
          success: false,
          error: "Nombre y calificación son obligatorios",
        },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        {
          success: false,
          error: "La calificación debe estar entre 1 y 5",
        },
        { status: 400 }
      );
    }

    const review = await Review.create({
      name: name.trim(),
      handle: handle ? handle.trim().replace("@", "") : "",
      rating: parseInt(rating),
      message: message ? message.trim() : "",
      isApproved: true, // ✅ Auto-aprobación activada
    });

    console.log("Review created:", review);

    return NextResponse.json(
      {
        success: true,
        data: review,
        message: "Reseña publicada exitosamente.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /api/reviews:", error);

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json(
        { success: false, error: errors.join(", ") },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
