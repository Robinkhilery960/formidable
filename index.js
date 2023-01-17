import dotenv from "dotenv"
import express from "express" 

dotenv.config({})

const app=express()

app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(process.env.PORT,(req,res)=>{
    console.log("listening at port 5000")
})

