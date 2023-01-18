import mongoose from "mongoose";
  
const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter name of image "],
  },
   image:{
    data:Buffer,
    contentType:String, 
   }
   
});

export const Image= mongoose.model("Image", imageSchema);