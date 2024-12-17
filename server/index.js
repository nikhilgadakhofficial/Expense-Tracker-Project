import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from "dotenv";


import {postSignup,postLogin} from './controllers/user.js'
import { postTransaction , getTransction } from "./controllers/transaction.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());



const connectdb = async () => {
  const conn  = await mongoose.connect(process.env.MONGO_URL);

  if (conn) {
    console.log("DB Connect");
  }
  else{
    console.log("Not");
    
  }
};
connectdb()




app.post("/signup", postSignup );

app.post("/login",postLogin)

app.post("/transaction", postTransaction)

app.get("/transaction" , getTransction)

const PORT =  8081;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });

  