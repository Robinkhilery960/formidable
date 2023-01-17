import express from "express";
import { getForm } from "../controllers/getForm.js";
import { Home } from "../controllers/home.js";
import { postForm } from "../controllers/postForm.js";

const router = express.Router();

router.get("/", Home);
router.get("/getform", getForm);

router.get("/postform", postForm);

export default router;