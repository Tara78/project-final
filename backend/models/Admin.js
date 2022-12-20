import mongoose from "mongoose";
import crypto from "crypto";

const { Schema } = mongoose;

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    // trim removes unnecessary whitespaces
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
 
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex"),
  },
});

export default mongoose.model("Admin", AdminSchema);
