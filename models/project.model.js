const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
   project_name : {type:String, required:true},
   last_edited : {type:Date, required:true},
   user_id : {type:String,required:true}
},{
    versionKey : false
});

const ProjectModel = mongoose.model("project",ProjectSchema);

module.exports = {ProjectModel};