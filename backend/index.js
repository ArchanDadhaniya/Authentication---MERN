import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import {connectDB} from "./db/connectDB.js";
import authRoutes from "./routes/auth.routes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;




app.use(express.json());  //this is know as the middleware and this is allow us to parse incoming request with json payloads
app.use(cookieParser());  // this is allow us to parse the incoming cookie
app.use("/api/auth", authRoutes);






app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server started on port ${PORT}`);
});


