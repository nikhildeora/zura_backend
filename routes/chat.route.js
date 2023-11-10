const express = require("express");
const {ChatModel} = require("../models/chat.model.js");
const chatRoute = express();

chatRoute.get("/", async(req, res)=>{
        const user_id = req.headers.authorization; 
    try {
        const chatBot_info = await ChatModel.findOne({user_id});
        res.status(200).json({
            "message": "Successfully retrieved chatbot info",
            "chatBot_info": chatBot_info
        });        
    } catch (error) {
        res.status(404).send({
            "message": "Error while getting chatBot info",
            "error": error
        });        
    }
})

chatRoute.post("/create_chatbot", async (req,res)=>{
    const user_id = req.headers.authorization; 
    const payload = req.body;
    try {
        const find_one = await ChatModel.find({user_id});
        if(find_one.length===0){
            let new_chatbot = await ChatModel.create({...payload,user_id});
            res.status(201).json({
                "message": "New chatbot created successfully",
                "chatBot_info": new_chatbot
            });
        }else{
            res.status(200).json({
                "message": "Chatbot found successfully",
                "chatBot_info": find_one[0]
            });
        }
    } catch (error) {
        res.status(500).json({
            "message": "Error while creating ChatBot",
            "error": error
        });
    }
});

module.exports = {chatRoute};