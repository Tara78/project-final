import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Create
router.get("/admin", async (req, res) => {
  res.send("Admin Route");
});
// Delete
// Get
// router.get("/admin", async (req, res) => {
//   try {
//     const admin = await Admin.find({}).exec();
//     res.status(200).json({ success: true, data: admin });
//   } catch (err) {
//     res.status(400).json({ success: false, err });
//   }
// });

export default router;
