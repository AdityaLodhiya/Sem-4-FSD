var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.type("text/html")
    res.send("<h1>hello</h1>")
})
app.get("/about",(req,res)=>{
    res.type("text/html")
    res.send("<h1>about page</h1>")
})
app.get("")
app.listen(3002,()=>{
    console.log("start");
    console.log("http://localhost:3002");
})