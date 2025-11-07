import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  status: "Active" | "Inactive";
  joiningDate: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  joiningDate: { type: Date, default: Date.now },
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
