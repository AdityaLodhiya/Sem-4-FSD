expr=require("express")
app=expr()
app.use(expr.urlencoded({extended:true}))
app.use(expr.static( "../public",{index:"form.html"}));
const a=(req,res,next)=>{
    var name=req.body.uname
    res.send("Welcome User "+ name)
    next()
}
app.use("/welcome",a)
app.listen(5678,()=>{console.log("Server Started");})