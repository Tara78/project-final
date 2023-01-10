import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt-nodejs";
import error from "../utils/error.js";

const router = express.Router();

/*Get Users*/
// localhost: 8000 / user 
router.get("/", async (req, res, next) => {
  try {
    
    const user = await User.find({name: req.body.name});    
    res.status(200).json({ success: true, data: user });

  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, err });
  }
});

/** Get All Users */
//localhost:8000/user/all
router.get("/all", async (req, res) => {
  try {
    const allUsers = await User.find({}).exec();
    res.status(200).json({ success: true, data: allUsers });
  } catch (err) {
  next(err)
  }
});

/** Create New User*/
//localhost:8000/user
router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  console.log(newUser)
  try {
    newUser.password= bcrypt.hashSync(newUser.password)

    const savedUser = await newUser.save();
    res.status(200).json({ success: true, data: savedUser });
  } catch (err) {
    console.warn(err);
    res.status(500).json(err);
  }
});

/** update */
//localhost:8000/user/:id
 router.put("/:id", async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

/** Delete */
//localhost:8000/user/:id
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
