expr=require("express")
app=expr()
app.use(expr.urlencoded({extended:true}))
app.use(expr.static( "../public",{index:"form2.html"}));
const a=(req,res,next)=>{
    var txt=req.body.txt
    res.send(txt)
}
app.use("/data",a)
app.listen(5678,()=>{console.log("Server Started");})