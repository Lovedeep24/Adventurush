const express = require("express")
const app = express();

const port= 7000;

app.get("/f",(req,res)=>{
    console.log("error");
    res.status(500)
})
app.get("/",(req,res)=>{    //GET REQUEST
    res.json("Hello from server")
})
app.get("/guitars",(req,res)=>{ //GET REQUEST
    res.json("GUITARS");
});

app.post("/guitars",(req,res)=>{    //POST REQUEST
    res.json("Post request on router");
})

app.get("/guitars/:id",(req,res)=>{
    const id=req.params.id;//THIS WILL TAKE THE ID FROM THE URL
    res.json(`Requested to get guitar with id:${id}`);
});

app.listen(port,()=>{
    console.log(`App is running on ${port}`);
});
