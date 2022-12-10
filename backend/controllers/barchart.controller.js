const Bardata = require("../models/barchart.model.js");



const bardata = async (req, res) => {
  
    let data = await Bardata.find();

    return res.status(200).send({
        status: "success",
        data,
      });


};

module.exports = bardata;