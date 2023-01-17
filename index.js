import dotenv from "dotenv"
import express from "express" 
import router from './Router/routes.js'

dotenv.config({})

const app=express()

app.use(router)
app.set("view engine","ejs") 

app.listen(process.env.PORT,(req,res)=>{
    console.log("listening at port 5000")
})


export default app
