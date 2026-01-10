import mongoose from "mongoose";

const academicSchema = new mongoose.Schema(
  {
    exam: String,
    board: String,
    year: String,
    stream: String,
    percentage: String,
  },
  { _id: false }
);

const admissionSchema = new mongoose.Schema(
  {
    course: {
      type: String,
      enum: ["BTECH", "MBA"],
      required: true,
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department", 
      required: true,
    },

    studentName: {
      type: String,
      required: true,
    },

    fatherName: {
      type: String,
      required: true,
    },

    fatherOccupation: {
      type: String,
    },

    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },

    category: {
      type: String,
      enum: ["GEN", "OBC", "SC", "ST"],
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    rollNo: {
      type: String,
    },

    rank: {
      type: String,
    },

    score: {
      type: String,
    },

    academics: [academicSchema],

    query: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },

    appliedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Admission ||
  mongoose.model("Admission", admissionSchema);
