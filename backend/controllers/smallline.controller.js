const Smallline = require("../models/smallline.model.js");



const smalllinechartdata = async (req, res) => {

    let data = await Smallline.find();
  
    return res.status(200).send({
      status: "success",
      data,
    });
  
  
  };


  module.exports = smalllinechartdata;