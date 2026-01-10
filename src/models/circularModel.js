import mongoose from "mongoose";
const circularSchema = new mongoose.Schema(
  {
    department: String,
    title: String,
    pdfUrl: String,
    date: String,
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.Circular ||
  mongoose.model("Circular", circularSchema);
