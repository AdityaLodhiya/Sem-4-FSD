var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.type("text/html")
    res.send("<h1>jay</h1>")
})
app.listen(3000,()=>{
    console.log("start");
})