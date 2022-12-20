import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import userRouth from "./routes/user.js";
import registerRouth from "./routes/register.js";
import loginRouth from "./routes/login.js";
import adminRouth from "./routes/admin.js";
// import calendar from "./routes/calendar.js";


const mongoUrl = process.env.MONGO_URL || "mongodb://127.0.0.1/final-project-user";
mongoose.set("strictQuery", false);
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = Promise;

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB Disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB Connected!");
});

const port = process.env.PORT || 8000;
const app = express();
dotenv.config();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(bodyParser.json());


/** Middleware */

app.get("/", (req, res) => {
  res.send("Helo Client!");
});

app.use(express.json())
app.use("/user", userRouth);
app.use("/login", loginRouth);
app.use("/register", registerRouth);
app.use("/admin", adminRouth);

app.use((err, req, res, next) => {
  const errorStatus= err.status || 500;
  const errorMessage= err.message || "Somthig went wrong"
  return res.status(errorStatus).json(
    {success:false,
      statuse:err.status,
      message:errorMessage,
      stack:err.stack
    })
})



/**Connect to UI */
// app.get("/calendar", async (req, res) => {
//   try {
//     const calendar = await Calendar.find({}).sort().exec();
//     res.status(200).json({
//       success: true,
//       result: calendar,
//     });
//   } catch (err) {
//     res.status(400).json({ success: false, response: err });
//   }
// });

//  Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
