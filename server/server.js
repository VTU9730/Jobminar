const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const app=express()
app.use(bodyParser.json())
app.use(cors())
const db=require("mongodb")
const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Jobminar")
    .then(()=>console.log("db"))
    .catch(err => console.error("Error connecting to database:", err));


const userSchema=new mongoose.Schema({
    email:String,
    password:String
})


const User=new mongoose.model("User",userSchema)

app.post("/register",(req,res)=>{
    const {email,password}=req.body
    const user=new User({
        email:email,
        password:password
    })
    user.save()
        .then(()=>console.log("user saved to db"))
    res.send("registered properly")
})
app.post("/login",async (req,res)=>{
    const {email,password}=req.body
    const data=await User.findOne({email})
    if(!data){
        res.send("")
    }
    else{
        res.send(data)
    }
})
app.listen(4000,()=>{
    console.log("port listening on 4000");
})