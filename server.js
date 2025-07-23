/** @format */

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config");
const User = require("./models/User");
const userRoutes = require("./routes/userRoutes");
const claimRoutes = require("./routes/claimRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", claimRoutes);

//app.post("/updateUser", async (req, res) => {
// const result = await User.updateMany({}, { $set: { points: 0 } });
//  res.send(result);
//});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
