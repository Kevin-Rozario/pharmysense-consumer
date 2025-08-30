import mongoose, { Model, Schema, model } from "mongoose";
import type { IMedicine } from "../types/medicine.d.js";

const MedicineSchema = new Schema<IMedicine>(
  {
    name: { type: String, required: true },
    brand: { type: String },
    type: { type: String },
    strength: { type: String },
    description: { type: String },
    saltComposition: { type: String },
    imageUrl: { type: String },
  },
  { timestamps: true },
);

export const MedicineModel: Model<IMedicine> =
  (mongoose.models.Medicine as Model<IMedicine>) ||
  model<IMedicine>("Medicine", MedicineSchema);
