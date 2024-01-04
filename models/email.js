const mongoose = require("mongoose");

let emailSchema = new mongoose.Schema({
    email:{
       type: String,
       required:true
    },
});


const Email = new mongoose.model("Email",emailSchema);

module.exports = Email;