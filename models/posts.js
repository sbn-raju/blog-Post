const mongoose = require("mongoose");


let postSchema  = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true,
        minLength:5
    },
    image:{
        type:String,
        require:true
    }
    
})

const Post = new mongoose.model("Post",postSchema);

module.exports = Post;