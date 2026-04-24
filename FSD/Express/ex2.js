expr=require("express")
app=expr()

const a=(req,res,next)=>{
    req.uname="abc"
    console.log("Uname insert");
    next()
}
const b=(req,res,next)=>{
    req.mark=20+3;
    console.log("Marks updated");
    next();
}
app.use("/data",a,b)
app.get("/data",(req,res)=>{
    res.send("User Name: "+req.uname+" Updated Marks: "+req.mark)
})
app.get("/data/a",(req,res)=>{
    res.send("User Name: "+req.uname)
})
//Can Also get data after redirecting drom /data
//If used app.get("/data",a,b,(req,res)=>{...}) then not possible for /data/a

app.listen(5623)