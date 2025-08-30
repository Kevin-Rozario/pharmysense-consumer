import { Document } from "mongoose";

export interface IMedicine extends Document {
    name: string;
    brand?: string;
    type?: string;
    strength?: string;
    description?: string;
    saltComposition?: string;
    imageUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
}