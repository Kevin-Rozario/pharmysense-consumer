import { Schema, model } from "mongoose";
import type { IPharmacy } from "../types/pharmacy.js";

const PharmacySchema = new Schema<IPharmacy>(
  {
    name: { type: String, required: true },
    ownerName: { type: String },
    licenseNumber: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    gpsLocation: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number], // [lng, lat]
        required: true,
      },
    },
    deliveryAvailable: { type: Boolean, default: false },
    deliveryRadiusKm: { type: Number },
    averageDeliveryTimeMinutes: { type: Number },
    rating: { type: Number, default: 0 },
    totalRatings: { type: Number, default: 0 },
  },
  { timestamps: true },
);

PharmacySchema.index({ gpsLocation: "2dsphere" });

export const PharmacyModel = model<IPharmacy>(
  "Pharmacy",
  PharmacySchema,
);
