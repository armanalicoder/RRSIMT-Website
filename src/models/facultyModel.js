import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const facultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    image:{
      type : String,
      default : "/default-avtar.png"
    },
    password: {
      type: String,
      required: true,
    },

    designation: {
      type: String,
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department", // linking faculty with department
      required: true,
    },
    role: {
      type: String,
      enum : ["director","faculty"],
      default: "faculty",
    },
    login :{
      type : String,
      enum :["enabled","disabled"],
      default : "disabled"
    }
  },
  { timestamps: true }
);

facultySchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.models.Faculty ||
  mongoose.model("Faculty", facultySchema);
