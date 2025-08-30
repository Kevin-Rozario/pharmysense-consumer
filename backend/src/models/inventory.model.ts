import { Schema, model } from "mongoose";
import type { IInventory } from "../types/inventory.d.js";

const InventorySchema = new Schema<IInventory>(
  {
    shopId: { type: Schema.Types.ObjectId, ref: "Pharmacy", required: true },
    medicineId: {
      type: Schema.Types.ObjectId,
      ref: "Medicine",
      required: true,
    },
    price: { type: Number, required: true },
    quantityAvailable: { type: Number, required: true },
    expiryDate: { type: Date, required: true },
    lastUpdated: { type: Date, default: Date.now },
  },
  { timestamps: false },
);

InventorySchema.index({ shopId: 1, medicineId: 1 }, { unique: true });

export const ShopInventoryModel = model<IInventory>(
  "ShopInventory",
  InventorySchema,
);
