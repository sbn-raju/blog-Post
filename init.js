const mongoose = require("mongoose");
const Email = require("./models/email");
const Connect = require("./models/connect");
const Post = require("./models/posts");

database().then((res)=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})

async function database(){
    await mongoose.connect('mongodb://127.0.0.1:27017/blog');
}

let newEmails = [
    {
        email:"Amit@gmail.com"
    },
    {
        email:"Sumit@gmail.com"
    },
    {
        email:"Kumar@gmail.com"
    },
    {
        email:"Monika@gmail.com"
    },

];
let connections = [
    {
        name:"Raju",
        email:"raju@gmail.com",
        phn:1234567891,
        msg:"Your blog post is incredibly insightful and well-researched. It provided me with a comprehensive understanding of the topic"
    },
    {
        name:"Shiva",
        email:"shiva@gmail.com",
        phn:9277274194,
        msg:"I appreciate the clarity of your writing. The way you explain complex concepts makes them easy to grasp."
    },
    {
        name:"Sumit",
        email:"Sumit@gmail.com",
        phn:903835594,
        msg:"Your blog post is a valuable resource for anyone interested in this field. It's evident that you put a lot of effort into gathering and presenting the information."
    },
    {
        name:"Sai",
        email:"sai@gmail.com",
        phn:904644194,
        msg:"The visuals you've included in your blog post are not only aesthetically pleasing but also enhance the understanding of the content"
    },
];

let posts = [{
   title:"Computer Science and Tech",
   content:"Computer science and technology are at the forefront of innovation, driving advancements across various industries and shaping the way we live and work. Computer science encompasses the study of algorithms, data structures, programming languages, and the principles of computing, providing the foundation for the development of software, hardware, and systems that power modern technology.",
   image:"https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169847.jpg?size=626&ext=jpg&uid=R120659580&ga=GA1.1.47078408.1694970475&semt=sph"

},
{
    title:"Artificial Intelligience",
    content:"Artificial Intelligence (AI) is a field of computer science that focuses on creating systems and machines capable of performing tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
    image:"https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?size=626&ext=jpg&uid=R120659580&ga=GA1.1.47078408.1694970475&semt=sph   "
},
{
    title:"Robotics",
    content:"Robotics is a multidisciplinary field that involves the design, construction, programming, and use of robots to perform tasks autonomously or semi-autonomously. Robots are mechanical or virtual agents that can be guided by computer programs or electronic circuitry, and they are used in a wide range of applications, from manufacturing and healthcare to exploration and entertainment.",
    image:"https://img.freepik.com/free-photo/humanoid-robot-working-with-machine-factory-ai-generative_123827-23864.jpg?size=626&ext=jpg&uid=R120659580&ga=GA1.1.47078408.1694970475&semt=sph"
},
{
    title:"Virtual Reality",
    content:"Virtual Reality (VR) is a technology that creates a simulated environment or experience, often through the use of headsets or multi-projected environments, to immerse users in a digital world that feels real. VR can be used for entertainment, such as gaming and interactive storytelling, as well as for practical applications like training simulations, virtual tours, and therapeutic experiences.",
    image:"https://img.freepik.com/free-photo/3d-rendering-vr-glasses-cinema_23-2150985311.jpg?size=626&ext=jpg&uid=R120659580&ga=GA1.1.47078408.1694970475&semt=sph"
},

]


Email.insertMany(newEmails),
Connect.insertMany(connections),
Post.insertMany(posts)





