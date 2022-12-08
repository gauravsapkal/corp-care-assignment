const Monthlydata = require("../models/data.model.js");


const monthlydata = async (req, res) => {
  
    let data = await Monthlydata.find();

    return res.status(200).send({
        status: "success",
        data,
      });


};

module.exports = monthlydata;