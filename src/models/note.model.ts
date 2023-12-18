import mongoose, { Schema, Document } from "mongoose";
import INote from "../interfaces/INote";

const noteSchema: Schema = new Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
        title: { type: String, required: true },
        content: { type: String, required: false}        
    }
)

const Product = mongoose.model<INote>("Note",noteSchema);
export default noteSchema;