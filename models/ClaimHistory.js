/** @format */

const mongoose = require("mongoose");

const claimHistorySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    userName: String,
    claimedPoints: Number,
  },
  { timestamps: true } // 👈 auto adds createdAt and updatedAt
);

module.exports = mongoose.model("ClaimHistory", claimHistorySchema);
