const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://nikhil:nikhil@cluster0.tyht4lr.mongodb.net/zura_project");

module.exports = {connection};
