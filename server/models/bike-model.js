const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Bike = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    rentPrice: { type: Number, required: true },
    rented: { type: Boolean, required: true },
    rentedTime: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("bikes", Bike);
