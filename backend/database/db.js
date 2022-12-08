import mongoose from "mongoose";

export const connect = () => {
  return mongoose.connect(
    "mongodb+srv://gauravsapkal:pass123@cluster0.obuzm6f.mongodb.net/?retryWrites=true&w=majority"
  );
};