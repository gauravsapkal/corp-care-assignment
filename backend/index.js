const express = require("express");
const cors = require("cors");


const connect = require("./database/db.js");
const monthlydata = require("./controllers/data.controller.js");



// `mongoose.set('strictQuery', false);`

const app = express();

app.use(cors());
app.use(express.json());


app.get("/getmonthlydata", monthlydata);


connect().then(() => {
  app.listen(8080, () => {
    console.log(`Listening on http://localhost:8080`);
  });
});