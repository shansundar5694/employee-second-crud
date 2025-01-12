import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbconfig.js";
import empRouter from "./Routers/employee.router.js";

dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json()); // for postcall data whta we send is not json.. so.. we include express.json

connectDB();

app.use("/api", empRouter);

app.listen(port, () => {
  console.log("app is running on", port);
});
