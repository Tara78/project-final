import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  startTime: {
    type: Date, // new Date().toISOString(); '2022-12-20T16:41:18.307Z'
    default:() => new Date(),
    required: true,
  },
  endTime: {
    type: Date, // new Date().toISOString(); '2022-12-21T21:41:18.307Z'
    required: true,
  }
})

// Frontend
// Fetch Bookings => [{ startTime, endTime }];

// Calendar React Compoent
// new Date(stateTime)

// 2022-01-31 23:00 => 2022-02-01 01:00
// month: 1
// day: 31
// time: 23:00


 
export default mongoose.model("Booking", BookingSchema);