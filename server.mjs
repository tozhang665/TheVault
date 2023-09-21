import express from "express";
import cors from "cors";
import "./backend/server/loadEnvironment.mjs";
import records from "./backend/server/routes/record.mjs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 5050;
const app = express();

if(process.env.NODE_ENV === "production"){
  app.use(express.static("frontend/build"));
  app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "frontend","build", "index.html"));
  })
}

app.use(cors());
app.use(express.json());

app.use("/record", records);


// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
