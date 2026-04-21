var express=require("express")
var app=express()
app.get("/data",(req,res)=>{
    uname=req.query.uname
    age=req.query.age
    res.send("Name= "+uname+" Age= "+age)
})
app.listen(5678,()=>{
    console.log("start");
    console.log("http://localhost:5678");
})