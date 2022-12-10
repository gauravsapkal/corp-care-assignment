const express = require("express");
const cors = require("cors");


const connect = require("./database/db.js");
const monthlydata = require("./controllers/data.controller.js");
const smalllinechartdata = require("./controllers/smallline.controller.js");




// `mongoose.set('strictQuery', false);`

const app = express();

app.use(cors());
app.use(express.json());


app.get("/getmonthlydata", monthlydata);

app.get("/smalllinedata", smalllinechartdata);

connect().then(() => {
  app.listen(8080, () => {
    console.log(`Listening on http://localhost:8080`);
  });
});