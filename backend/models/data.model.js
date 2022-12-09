const { default: mongoose } = require("mongoose");

const monthlydataSchema = new mongoose.Schema({
  value: { type: Number }
});

const Monthlydata = mongoose.model("monthlydata", monthlydataSchema);

module.exports = Monthlydata;