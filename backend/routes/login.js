import express, { application } from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/login", async (req, res) => {
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

const authenticatUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");
  try {
    const user = await User.findOne({ accessToken });
    if (user) {
      next();
    } else {
      res.status(401).json({
        success: false,
        response: "Please try to login again.",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
    });
  }
};

router.post("/login", authenticatUser);

export default router;
