import mongoose from "mongoose";

export default interface INote extends Document {
    title: string;
    content: string;
    user: mongoose.Types.ObjectId;
}