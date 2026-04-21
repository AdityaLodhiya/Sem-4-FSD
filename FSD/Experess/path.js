
var express=require("express")
var app=express()
app.get("/flight/:from/:to",(req,res)=>{
   res.send(req.params)
})

app.listen(5001,()=>{
    console.log("start");
    console.log("http://localhost:5001");
})