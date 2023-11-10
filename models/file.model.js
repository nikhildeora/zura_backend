const mongoose = require("mongoose");

const FileSchema = mongoose.Schema({
    source : {type:String, required:true,enum: ["youtube", "spotify", "rss feed"]},
    file_name : {type:String, required:true},
    file_description : {type:String, required:true},
    project_id : {type:String, required:true},
    user_id : {type:String, required:true},
},{
    versionKey : false
});

const FileModel = mongoose.model("file",FileSchema);

module.exports = {FileModel};