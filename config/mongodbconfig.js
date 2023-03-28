import mongoose from "mongoose";

const db = mongoose.connect(
  "mongodb+srv://nominloc:jxutusBvVjK36Ijf@location.e1sdwwx.mongodb.net/location?retryWrites=true&w=majority"
);

export default mongoose.connection;
