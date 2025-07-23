/** @format */

const mongoose = require("mongoose");

const claimHistorySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    userName: String,
    claimedPoints: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClaimHistory", claimHistorySchema);
