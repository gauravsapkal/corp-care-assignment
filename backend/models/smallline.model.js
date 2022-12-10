const { default: mongoose } = require("mongoose");

const smalllineSchema = new mongoose.Schema({
  value: { type: Number }
});

const Smallline = mongoose.model("smallline", smalllineSchema);

module.exports = Smallline;