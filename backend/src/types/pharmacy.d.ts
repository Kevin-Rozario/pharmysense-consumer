import { Document } from "mongoose";

export interface IPharmacy extends Document {
  name: string;
  ownerName?: string;
  licenseNumber: string;
  email: string;
  phoneNumber: string;
  address: string;
  gpsLocation: {
    type: "Point";
    coordinates: [number, number];
  }
  deliveryAvailable: boolean;
  deliveryRadiusKm?: number;
  averageDeliveryTimeMinutes?: number;
  rating?: number;
  totalRatings?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
