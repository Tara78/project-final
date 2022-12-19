import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const mongoUrl = process.env.MONGO_URL || "mongodb://127.0.0.1/mongo-project";

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// PORT=9000 npm start
const port = process.env.PORT || 9000;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(bodyParser.json());

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 140,
    // trim removes unnecessary whitespaces
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex"),
  },
});

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Helo User!");
});

app.get("/users", async (req, res) => {
  try {
    const user = await User.find({}).limit(10).sort().exec();
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
});

/******** Register Route*/
app.post("/register", async (req, res) => {
  const { name, password, email } = req.body;
  if (password.length < 6) {
    res.status(400).json({
      success: false,
      response: "You need to have min 6 characters!",
    });
  } else {
    try {
      const newUser = await new User({
        name: name,
        email: email,
        password: bcrypt.hashSync(password),
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
      res.status(400).json({
        success: false,
        response: err,
      });
    }
  }
});

/******** Login Route*/
app.post("/login", async (req, res) => {
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
        response: "Could not login 😕 try again! ",
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

/** Calendar database */

const Calendar = mongoose.model("Calendar", {
  month: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  // email: {
  //   type: String,
  //   required: true,
  // },
  // password: {
  //   type: Number,
  //   required: true,
  // },
});

//  Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
