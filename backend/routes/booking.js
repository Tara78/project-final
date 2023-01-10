import express from "express";
import Booking from "../models/Booking.js";

import {
  adminAuthMiddleFunction,
  userAuthMiddleFunction,
} from "../utils/middleware";

const router = express.Router();

router.get("/free/:month/:day", userAuthMiddleFunction, async (req, res) => {
  try {
    const calendar = await Booking.find({
      month:req.params.month,
      day:req.params.day    
    });
    // todo filter for NotBooked times

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

router.post("/create/:year/:month", adminAuthMiddleFunction,
async (req, res) => {
  try {
    
   for (let i = 0; i <= new Date(year, month, 0).getDate(); i++) 
{    
    const date = new Date(year, month, i);

    if (date.getDay() == 6)
    {
      [14,15,16,17,18].forEach((time) => {

       const newBooking= new Booking({
        year,
        month, 
        day: date.getDay(), 
        time
       }).save();

      })
    } 
  }
  }
  catch(err) {

  }
});

export default router;
