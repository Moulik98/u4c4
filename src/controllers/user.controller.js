const express = require("express");

const client=require("../configs/redis");


const user = require("../models/user.model");
const router = express.Router();

router.post("",async(req,res)=>{
    try{
        const user =await user.create(req.body);
        const users = await user.find().lean().exec();
        client.set("users",JSON.stringify(users));
        return res.status(201).send(user)
    }catch{
        return res.status(500).send({message: err.message})
    }
})
