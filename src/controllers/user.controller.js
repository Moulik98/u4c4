const express = require("express");

const client=require("../configs/redis");


const user = require("../models/user.model");
const router = express.Router();

router.post("",async(req,res))
