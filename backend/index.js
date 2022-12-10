const express = require("express");
const cors = require("cors");


const connect = require("./database/db.js");
const monthlydata = require("./controllers/data.controller.js");
const smalllinechartdata = require("./controllers/smallline.controller.js");
const bardata = require("./controllers/barchart.controller.js");




// `mongoose.set('strictQuery', false);`

const app = express();

app.use(cors());
app.use(express.json());


app.get("/getmonthlydata", monthlydata);

app.get("/smalllinedata", smalllinechartdata);

app.get("/bardata", bardata);

connect().then(() => {
  app.listen(8080, () => {
    console.log(`Listening on http://localhost:8080`);
  });
});