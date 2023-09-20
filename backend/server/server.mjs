import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import * as path from 'path';
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "client","build", "index.html"))
  })
}

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
