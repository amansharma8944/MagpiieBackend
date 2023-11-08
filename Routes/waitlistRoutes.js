// const express = require("express");
// const router = express.Router();
// require("dotenv").config();
// const asyncHandler = require("express-async-handler");
// const bcrypt = require("bcrypt");

// const db=require("../db");
// router.post('/waitlist', asyncHandler(async (req, res) => {
//     const { name, email, youtubeLink } = req.body;

//     const query = `INSERT INTO WaitList (name, email, youtubelink) VALUES (?, ?, ?)`;
//     db.query(query, [name, email, youtubeLink], (err, result) => {
//         if (err) {
//             console.error("Error inserting data:", err);
//             res.status(500).json({ error: "Error inserting data into the database" });
//         } else {
//             res.status(200).json({ message: "Form data inserted successfully" });
//         }
//     });
// }));

// module.exports = router;



import express from "express"
import { config } from 'dotenv';
config();
// import db from "../db.js"

// import { db } from "../server.js";
// import dbCon, { db } from "../db.js";
const router=express.Router();


console.log(process.env.TABLE_NAME)



router.get("/",(req,res)=>{


  
    const sql = `SELECT COUNT(*) AS count FROM ${process.env.TABLE_NAME}`;
    // db.query(sql, (err, results) => {
    //   if (err) {
    //     res.status(500).send('Error querying the database');
    //   } else {
    //     res.json({ count: results[0].count });
    //   }
    // });

   

return res.json({count:43})

  
    
})





router.post("/signup",(req,res)=>{


  const {Name, Email, YoutubeLink } = req.body;
  // const query = `INSERT INTO WaitList (name, email, youtubelink) VALUES (?, ?, ?)`;
  //     db.query(query, [Name, Email, YoutubeLink], (err, result) => {
  //         if (err) {
  //             console.error("Error inserting data:", err);
  //             res.status(500).json({ error: "Error inserting data into the database" });
  //         } else {
  //             res.status(200).json({ message: "Form data inserted successfully" });
  //         }
  //     });
  res.send("done").status(200)


   
})








export default router;