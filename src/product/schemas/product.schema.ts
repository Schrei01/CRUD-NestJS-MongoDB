import { Schema } from "mongoose";

export const ProductSChema = new Schema({
    name: String,
    description: String,
    imageURL: String,
    price: Number,
    createAt: {
        type: Date,
        default: Date.now
    }
})