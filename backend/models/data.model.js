const { default: mongoose } = require("mongoose");

const monthlydataSchema = new mongoose.Schema({
  price: { type: Number },
  data: { type: Number }
});

const Monthlydata = mongoose.model("monthlydata", monthlydataSchema);

module.exports = Monthlydata;