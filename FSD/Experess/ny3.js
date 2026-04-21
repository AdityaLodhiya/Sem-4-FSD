var express=require("express")
var app=express()
app.get("/user/:id",(req,res)=>{
    const uid=req.params.id
    const uname=req.query.name
    const mark=req.query.mark
})
 res.json({
    "message":"Data received","params":{'id':'44'},"query":{"name":"test","mark":"23"}
 })
app.listen(1235,()=>{
    console.log("start");
    console.log("http://localhost:1235");
})