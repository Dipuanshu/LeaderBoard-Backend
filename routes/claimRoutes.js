/** @format */

const express = require("express");
const router = express.Router();
const {
  claimPoints,
  getLeaderboard,
  getClaimHistory,
} = require("../controllers/claimController");

router.post("/claim-points", claimPoints);
router.get("/leaderboard", getLeaderboard);
router.get("/claim-history/:userId", getClaimHistory);

module.exports = router;
