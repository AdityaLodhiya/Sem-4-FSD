expr=require("express")
app=expr()

const a=(req,res,next)=>{
    req.id=false
    console.log("Student Enterd Exam Center");
    next()
}
const b=(req,res,next)=>{
    if(req.id==true){
        next()
    }
    else{
        res.send("User do not have ID!!")
    }
}
app.use("/",a,b)
app.get("/",(req,res)=>{
    res.send("Best of Luck for Exam")
})

app.listen(5623)