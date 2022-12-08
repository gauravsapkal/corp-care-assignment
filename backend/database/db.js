const { default: mongoose } = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://gauravsapkal:pass123@cluster0.obuzm6f.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;