// import express, { json } from 'express';
// import cors from 'cors';

// import db from "./db.js";
// import { config } from 'dotenv';
// config();
// const app = express();
// app.use(cors());
// app.use(json());
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });

// app.use('/metapher/public',require('./Routes/waitlistRoutes'));





import express from "express";
import  cors from "cors";
import router from "./Routes/waitlistRoutes.js";
// import dbCon from "./db.js";
import { createConnection } from "mysql2";
import { config } from 'dotenv';
config();


const app=express();
const PORT=process.env.PORT||8000
app.use(cors());

// Middleware for parsing application/json
app.use(express.json());

// Middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// dbCon();




app.use("/",router)




app.listen(PORT,()=>{
  console.log(`SUCCESSFULLY port on ${PORT} `)
})