import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv"
dotenv.config({
    path: "./env"
});

connectDB();













/*
import express from "express";
(async () => {
  try {
    await mongoose.connect(`${process.env.
        MONGO_URL}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("Error:", error);
            throw error
        })
        app.listen(process.env.PORT, () =>{
            console.log(`App is listeniing on port $
                {process.env.PORT}`);
        })
  } catch (error) {
    console.error("Error: ", error)
    throw err
  }
})()
*/