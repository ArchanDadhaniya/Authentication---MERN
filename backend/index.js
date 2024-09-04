import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./db/connectDB.js";
import authRoutes from "./routes/auth.routes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;




app.use(express.json());
app.use("/api/auth", authRoutes)



  //this is know as the middleware and this is allow us to parse incoming request with json payloads



app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server started on port ${PORT}`);
});


