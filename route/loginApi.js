import express from "express";
import Users from "../model/UserSchema.js";

const adminApi = express();

adminApi.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).json({
        success: false,
        status: "Утгуудаа бүрэн оруулна уу.",
        updated: 1,
        email: email,
        password: password,
      });
      return;
    }
    const user = await Users.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        "MySuperDuperPrivateKey",
        {
          expiresIn: "2h",
        }
      );
      res.status(200).json({
        success: true,
        status: "Амжилттай нэвтэрлээ.",
        data: user,
        token: token,
      });
      return;
    }
    res.status(400).json({
      success: false,
      status: "Нууц үг нэр хоорондоо таарахгүй байна.",
    });
    return;
  } catch (err) {
    console.log(err);
  }
});

export default adminApi;
