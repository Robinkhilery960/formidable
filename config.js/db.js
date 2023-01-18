import mongoose from "mongoose";
 
const {MONGODB_URL}=process.env
export const connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("connection successful")
    }).catch((error)=>{
        console.log("connection failed")
        console.log(error)
    })
}