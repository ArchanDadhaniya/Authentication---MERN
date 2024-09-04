import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./db/connectDB.js";
import authRoutes from "./routes/auth.routes.js";


dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Coding world!");
})

app.use("/api/auth", authRoutes)

app.listen(8080, ()=>{
    connectDB();
    console.log("Server started on port 8080");
});


