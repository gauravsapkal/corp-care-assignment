import express from "express";
import cors from "cors";
import { connect } from "./database/db.js";
import { monthlydata } from "./controllers/data.controller.js";


const app = express();

app.use(cors());
app.use(express.json());


app.get("/getmonthlydata", monthlydata);


connect().then(() => {
  app.listen(8080, () => {
    console.log(`Listening on http://localhost:8080`);
  });
});