// models/Review.js
import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
      maxLength: [50, "El nombre no puede exceder 50 caracteres"],
    },
    handle: {
      type: String,
      trim: true,
      maxLength: [30, "El @ no puede exceder 30 caracteres"],
      default: "",
    },
    rating: {
      type: Number,
      required: [true, "La calificación es obligatoria"],
      min: [1, "La calificación mínima es 1"],
      max: [5, "La calificación máxima es 5"],
    },
    message: {
      type: String,
      trim: true,
      maxLength: [500, "El mensaje no puede exceder 500 caracteres"],
      default: "",
    },
    isApproved: {
      type: Boolean,
      default: true, // ✅ Auto-aprobación por defecto
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Índices para mejorar rendimiento
ReviewSchema.index({ isApproved: 1, createdAt: -1 });
ReviewSchema.index({ rating: 1 });

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
