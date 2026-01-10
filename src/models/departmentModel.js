import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    code: {
      type: String,
      required: true,
      unique: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    course: {
      type: String,
      enum: ["BTECH", "MBA"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Department ||
  mongoose.model("Department", departmentSchema);
