var express=require("express")
var app=express()
let obj=[{name:"abc",age:28},{name:"x",age:32},{name:"y",age:24}]
app.get("/",(req,res)=>{
    
    res.type("text/html")

    res.send("obj")
})
app.get("/sorted",(req,res)=>{
    const ans=obj.sort((a,b)=>b.age-a.age)
    for(i of ans ){
        res.write("<b>"+i.name+"="+i.age+"</b>")
    }


})
app.listen(3004,()=>{
    console.log("start");
})
