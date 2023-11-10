const express = require("express");
const {UserModel} = require("../models/user.model.js");
const userRoute = express.Router();

userRoute.get("/", async (req,res)=>{
    try {
        let allUsers = await UserModel.find();
        res.send(allUsers);
    } catch (error) {
        res.send({"message":"error while fetching users",error})
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
            res.send({"message":"user created",current_user});
        }else{
            res.send({"message":"user existed","current_user":user_check[0]});
        }
    } catch (error) {
        res.send({"message":"error while creating user",error})
    }
})

userRoute.patch("/change_name/:id", async (req,res)=>{
    const ID = req.params.id;
    const payload = req.body;
    try {
        await userRoute.findByIdAndUpdate({_id:ID},payload);
        let current_user = await userRoute.findById(ID);
        res.send({"message":"user name updated successfully",current_user});        
    } catch (error) {
        res.send({"message":"error while changing user name",error})
    }
});

module.exports = {userRoute};