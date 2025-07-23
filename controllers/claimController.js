/** @format */

const User = require("../models/User");
const ClaimHistory = require("../models/ClaimHistory");

exports.claimPoints = async (req, res) => {
  const { userId } = req.body;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  const randomPoints = Math.floor(Math.random() * 10) + 1;
  user.points += randomPoints;

  await user.save();

  const history = new ClaimHistory({
    userId: user._id,
    userName: user.name,
    claimedPoints: randomPoints,
  });
  await history.save();

  res.json({ claimedPoints: randomPoints });
};

exports.getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
};

exports.getClaimHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    const history = await ClaimHistory.find({ userId })
      .sort({ createdAt: -1 })
      .limit(20);

    res.json(history);
  } catch (err) {
    console.error("Error fetching claim history:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
