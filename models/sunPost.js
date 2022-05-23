const mongoose = require("mongoose");

const sunPostSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // referencing a model
    photoUrl: String,
    date: String,
    location: String,
    sun_watchers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    description: String,
    sunQuote: { type: mongoose.Schema.Types.ObjectId, ref: "Quote" },
    postType: { type: String, enum: ["sunrise", "sunset"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('SunPost', sunPostSchema);
