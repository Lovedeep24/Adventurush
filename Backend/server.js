const express = require("express");
const dotenv = require("dotenv");
const cors=require("cors");
const authRoute = require("./routes/auhtRoute.js");

const connectToMongoDb = require("./config/db.js");
const app=express();
app.use(express.json());
app.use(cors());
dotenv.config();
const PORT=process.env.PORT;

// Root Route -->http://localhost:8000/
app.get("/",(req,res)=>{
    res.send("Root Route");
});


app.use("",authRoute);

app.listen(PORT,()=>{
    console.log(`App is running on PORT ${PORT}`);
    connectToMongoDb();
})
