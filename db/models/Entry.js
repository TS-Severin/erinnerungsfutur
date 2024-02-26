import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const entrySchema = new Schema({
    date: { type: String },
    slug: { type: String },
    datestring: { type: String },
    title: { type: String },
    author: { type: String },
    text: { type: String },
});

const Entry = mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default Entry;