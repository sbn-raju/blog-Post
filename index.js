const { Console } = require("console");
const express = require("express");
const app = express();
const path = require("path");
const Email = require("./models/email");
const Connect = require("./models/connect");
const Post = require("./models/posts");
const mongoose = require("mongoose");

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/images")));
app.use(express.urlencoded({extended:true}));

let port = 8080;
app.listen(port, ()=>{
    console.log("Port Listening at" ,port); 
});

database().then((res)=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})

async function database(){
    await mongoose.connect('mongodb://127.0.0.1:27017/blog');
}

app.post("/email/submit",(req,res)=>{
    let {mail} = req.body;
    let mailData = new Email({
    email : mail ,
    });
    mailData.save().then((result)=>{
        console.log("Data Enterered");
        res.redirect("/");
    }).catch((err)=>{
        console.log(err);
    });

})

app.get("/post/add",(req,res)=>{
    res.render("new.ejs");
});

app.post("/post/connects",(req,res)=>{
    let{name, email, phn, msg}=req.body;
    let connectData = new Connect({
        name:name,
        email:email,
        phn:phn,
        msg:msg,
    });
    connectData.save().then((result)=>{
        res.redirect("/");
    }).catch((err)=>{
        console.log(err);
    })
})

app.post("/post/new",(req,res)=>{
    let {title, content, image } = req.body;
    let postingData = new Post({
        title:title,
        content:content,
        image:image,
    });
    postingData.save().then((result)=>{
        console.log("Posting Data Successfully");
        res.redirect("/");
    })
    .catch((err)=>{
        console.log(err)
        res.render("error.ejs");
    })
});

app.get("/post/show", async(req,res)=>{
    let postData = await Post.find({});
    res.render("show.ejs",{postData});
});

app.get("/", async(req,res)=>{
    let lastPostData = await Post.find({}).sort({_id:-1}).limit(3);
    res.render("index.ejs",{lastPostData});
});