import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email"],
    unique: [true, "email exists"],
  },
  password: {
    type: String,
    required: [true, "inser password"],
    unique: false,
  },
});

const Users = mongoose.model("User", userSchema);
export default Users;
