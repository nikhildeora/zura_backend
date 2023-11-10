const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  user_email : {type:String, required:true},
  user_avatar : URL,
  user_name : String
},{
    versionKey: false
});

const UserModel = mongoose.model("user",UserSchema);

module.exports = {UserModel};