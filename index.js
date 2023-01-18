import dotenv from "dotenv"
import express from "express" 
import router from './Router/routes.js' 
import {connect} from "./config.js/db.js" 

dotenv.config({})
connect() 

const app=express()

app.use(router)
app.set("view engine","ejs") 

app.listen(process.env.PORT,(req,res)=>{
    console.log("listening at port 5000")
})


export default app
