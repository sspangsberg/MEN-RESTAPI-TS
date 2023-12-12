import mongoose, { Schema, Document } from "mongoose";
import IProduct from "../interfaces/IProduct";

const ProductSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: false},
        price: { type: Number, required: true },
        inStock: { type: Boolean, required: true }
    }
)

const Product = mongoose.model<IProduct>("Product",ProductSchema);
export default Product;