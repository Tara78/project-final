import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name,email , password } = req.body;
  if (password.length < 6) {
    res.status(400).json({
      success: false,
      response: "You need to have min 6 characters!",
    });
  } else {
    try {
      const salt= req.body.username;
      const hash= bcrypt.hashSync(req.body.password, salt);
      const newUser = await new User({
        name: name,
        email: email,
        password: hash,
      }).save();
      res.status(201).json({
        success: true,
        response: {
          name: newUser.name,
          email: newUser.email,
          accessToken: newUser.accessToken,
          id: newUser._id,
        },
      });
    } catch (err) {
      res.status(400).json(errorMessage(err, 'Can not register a new Client, try it again!'))
    }
  }
});



export default router;
