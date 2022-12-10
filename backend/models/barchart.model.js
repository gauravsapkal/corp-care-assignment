const { default: mongoose } = require("mongoose");

const barchartSchema = new mongoose.Schema({
  value1: { type: Number },
  value2: { type: Number },
});

const Bardata = mongoose.model("bardata", barchartSchema);

module.exports = Bardata;