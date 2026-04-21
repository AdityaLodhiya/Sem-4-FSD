var express=require("express")
var app=express()
app.get("/",(req,res)=>{
   let obj={name:"abc",age:28}
//    res.write(JSON.stringify(obj))
  res.send(obj.age+" ")
// res.json(obj)
})
app.listen(3001,()=>{
    console.log("start");
})