const express = require("express");
const dotenv = require("dotenv");
const cors=require("cors");

const connectToMongoDb = require("./config/db.js");
const Signup=require("./models/SignupModel.js");
const app=express();
app.use(express.json());
app.use(cors());
dotenv.config();
const PORT=process.env.PORT;

// Root Route -->http://localhost:8000/
app.get("/",(req,res)=>{
    res.send("Root Route");
});

app.listen(PORT,()=>{
    console.log(`App is running on PORT ${PORT}`);
    connectToMongoDb();
})

//LOGIN
app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    console.log(email,password);
    if(!email || !password)
    {
        res.status(300).json("No email or password");
    }
    try {
        const User=await Signup.findOne({email});

        if(!User)
        {
         res.status(404).json("Do not Exist");
        }
        else{
        if(User.password === password)
        {
            res.status(200).json(User);
        }
        else{
                res.status(400);
        }
    }
    } catch (error) {
        res.json("error");
    }
})

//SignUp
app.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password)
    {
        res.status(404).json("All fields are mandatory");
    }
    try {
        const existingUser=await Signup.findOne({email});
        if(existingUser)
        {
            console.log("User exists");
            res.status(400).json("User exist");
           
        }
        else{
            console.log("creating user");
            const user=await Signup.create({
                name,
                email,
                password
               });
               console.log("user created");
               res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json(`An error occured while signup ${error}`);
    }
   
    })
