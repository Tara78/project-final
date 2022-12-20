import express from "express";
import Calendar from "../models/Calendar.js";

import {
  adminAuthMiddleFunction,
  userAuthMiddleFunction,
} from "../utils/middleware";

const router = express.Router();

router.get("/calendar", userAuthMiddleFunction, async (req, res) => {
  try {
    const calendar = await Calendar.find({});
    res.status(200).json({
      success: true,
      result: calendar,
    });
  } catch (err) {
    res.status(400).json({ success: false, response: err });
  }
});

router.delete("/calendar", adminAuthMiddleFunction, async (req, res) => {
  try {
    const calendar = await Calendar.find({});
    res.status(200).json({
      success: true,
      result: calendar,
    });
  } catch (err) {
    res.status(400).json({ success: false, response: err });
  }
});

export default router;
