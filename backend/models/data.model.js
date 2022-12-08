import mongoose from "mongoose";

const monthlydataSchema = new mongoose.Schema({
  price: { type: Number },
  data: { type: Number }
});

export const Monthlydata = mongoose.model("monthlydata", monthlydataSchema);
