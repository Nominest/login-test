import express from "express";
import mongoose from "mongoose";
import mongodbconfig from "./config/mongodbconfig.js";
import bcrypt from "bcrypt";
import Users from "./model/UserSchema.js";
import adminApi from "./route/loginApi.js";
import cors from "cors";

const port = 5200;
const app = express();

app.use(cors());
app.use(express.json());
app.use(adminApi);

app.listen(port, () => {
  mongodbconfig;
  console.log(`app is listening ${port}`);
});
