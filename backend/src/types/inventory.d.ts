import { Document, Types } from "mongoose";

export interface IInventory extends Document {
  shopId: Types.ObjectId;
  medicineId: Types.ObjectId;
  price: number;
  quantityAvailable: number;
  expiryDate: Date;
  lastUpdated: Date;
}