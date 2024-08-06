const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.ObjectId,
    ref: "Event",
    required: [true, "Booking must belong to a Tour!"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Booking must belong to a User!"],
  },
  teammember: {
    type: [String],
  },
  price: {
    type: Number,
    require: [true, "Booking must have a price."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  paid: {
    type: Boolean,
    default: true,
  },
});

bookingSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name email", // Specify the fields you want to populate
  }).populate({ path: "event", select: "name" });
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;