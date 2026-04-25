expr=require("express")
app=expr()
app.use(expr.urlencoded({extended:true}))
app.use(expr.static( "../public",{index:"form3.html"}));
const a=(req,res,next)=>{
    var val=req.body.formula
    var a=parseInt(req.body.n1)
    var b=parseInt(req.body.n2)
    if(val=="add"){res.write(a+b+"")}
    else if(val=="sub"){res.write(a-b+"")}
    else if(val=="mul"){res.write(a*b+"")}
    else{res.write(a/b+"")}
    next()
}
app.use("/data",a)
app.listen(5678,()=>{console.log("Server Started");})