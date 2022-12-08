import { Monthlydata } from "../models/data.model.js";







export const monthlydata = async (req, res) => {
  
    let data = await Monthlydata.find();

    return res.status(200).send({
        status: "success",
        data,
      });


};