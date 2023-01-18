import express from "express";
import { getForm } from "../controllers/getForm.js";
import { Home } from "../controllers/home.js";
import { postForm } from "../controllers/postForm.js";
import formidable from "formidable"; 
import {Image} from "../model/image.schema.js"
import fs from "fs"

const router = express.Router();

router.get("/", Home);
router.get("/getform", getForm);
router.get("/postform", postForm);

router.post("/mypost", async (req, res) => {

  
  /* 
    formidable is a function
    form an instance of the incoming form data from the client - an object have many properties like
    formidable function take some options like multiple , keepExtension etc.
    what are different option ? With the help of the options we can configure our form 
    multiples: this is saying that our form is accepting multiple files 
    keepExtensions: to include the extensions of the original files or not- when you will parse the  request stream with the help of the formidable  at that  time your file is given a new name so in that  new name you want to keep the extension or not  will be decided by this option 
    uploadDir: Location of the folder where you wan to upload your file , be default this is set to temp folder 
    you can also set the file upload  size 
    */

  
 
  const form = formidable({
    multiples: true, // by default this is true
    keepExtensions: true, // by default this is false
    uploadDir:process.cwd(),// we are changing  the upload folder to the current directory 
  });
  
  // console.log(form);

  /* 
  till now we have configure our for that what our form will be like it will accept the multiple files , it will keep the original  extension , where it will upload the files and so on . 
  Now we will parse the request stream containing form data  with the help of the newly created form from formidable parse method, if you will provide the callback function to this then all the fields and files will be collected and those will be passed to the callback function  
   */

  form.parse(req, async(err, fields, files) => { 
    if(err){
      console.log("Error while parsing files")
      return res.status(400).json({
        status: "Fail",
        message: "There was an error parsing the files",
        error: err,
      })
     }


    /* 
    if there will be any error while parsing this form data then it will be thrown 
    fields is an object that will contains your fields the you passed from the form like name, last name etc .
    files- an array contains multiple files and ech files is an object in itself in it  
    At this point of time your files are parsed and they are stored also in uploadDir folder generally we uses temp folder then doing it in ram .
    */
   
    // console.log('fields:', fields);
    // console.log('files:', files);

    const data = fs.readFileSync(files.samplefile.filepath)

    // console.log("data:",data)

    // upload image to mongodb 
      const uploadedImage= await Image.create({
        name:files.samplefile.newFilename,
        image:{
          data,
          contentType:"image/png"
        }
      })
     
  });

  res.status(200).json({
    success: true,
    message: "File uploaded successfully",
  });
});

export default router;
