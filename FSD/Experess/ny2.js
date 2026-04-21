var express=require("express")
var app=express()
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send(`<h1>User Form</h1>
    <form action="/data" method="post">
    uname:<input type="text" name="uname">
    Age:<input type="text" name="age">
    <button type="submit">Submit</button>
    </form>`)
})
app.post("/data",(req,res)=>{
    uname=req.body.uname
    age=req.body.age
    res.send("welcome "+uname+" your age is "+age)
})
app.listen(5671,()=>{
    console.log("start");
    console.log("http://localhost:5671");
})