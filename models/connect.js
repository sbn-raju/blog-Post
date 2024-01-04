const mongoose = require("mongoose");


let connectSchema = new mongoose.Schema({
    name:{
     type: String,
     required: true
    },
    email:{
     type:String,
     required:true
    },
    phn:{
     type:Number,
     required:true
    },
    msg:{
     type:String,
     required:true
    }

});


const Connect = new mongoose.model("Connect",connectSchema);

module.exports = Connect;