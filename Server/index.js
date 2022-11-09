const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRounte = require("./Routers/auth");
const userRoute = require("./Routers/user");
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("CONNECTED TO MONGO DB");
});
const PORT = process.env.port || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
app.use(bodyParser.json({ limit: "30mb" }));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
//Ngan chan loi
app.use(cors());
// de toan bo du lieu tra ve deu la json

//ROUTER
app.use("/v1/auth", authRounte);
app.use("/v1/user", userRoute);
app.use(express.json());

//JSON WEB TOKEN
