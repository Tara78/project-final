import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt-nodejs";

const router = express.Router();

router.get("/", async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ name });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        response: {
          name: user.name,
          id: user.id,
          accessToken: user.accessToken,
        },
      });
    } else {
      res.status(400).json({
        success: false,
        response: "Wrong password, or usename! ",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      response: err,
    });
  }
});


export default router;
