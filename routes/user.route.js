const express = require("express");
const {UserModel} = require("../models/user.model.js");
const userRoute = express.Router();

userRoute.get("/", async (req,res)=>{
    try {
        let allUsers = await UserModel.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({
            "message":"error while fetching users",
            error
        })
    }
});

userRoute.post("/create_user", async (req,res)=>{
    const user_body = req.body;
    try {
        const user_check = await userRoute.find({user_email:user_body.user_email});
        if(user_check.length===0){
            const new_user = new userRoute({...user_body});
            await new_user.save();
            const current_user = await userRoute.findOne({user_email:user_body.user_email});
            res.status(201).json({
                "message":"user created",
                current_user
            })
        }else{
            res.status(200).json({
                "message":"user existed",
                "current_user":user_check[0]
            })
        }
    } catch (error) {
        res.send(500).json({
            "message":"error while creating user",
            error
        })
    }
})

userRoute.patch("/change_user/:id", async (req,res)=>{
    const ID = req.params.id;
    const payload = req.body;
    try {
        await userRoute.findByIdAndUpdate({_id:ID},payload);
        let current_user = await userRoute.findById(ID);
        res.status(200).send({
            "message": "User updated successfully",
            current_user
        });        
    } catch (error) {
        res.status(500).send({
            "message": "Error while changing user name",
            error
        });        
    }
});

module.exports = {userRoute};