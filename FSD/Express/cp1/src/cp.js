expr=require("express")
app=expr()
cp=require('cookie-parser')
app.use(cp())
app.use(expr.static("../public",{index:"index.html"}))
app.use(expr.urlencoded({extended:true}))
app.post("/data",(req,res)=>{
    const name=req.body.fname
    const pwd=req.body.pass
    res.cookie("firstname",name)
    res.cookie("Password",pwd)
    res.redirect("/user")
})
app.get("/user",(req,res)=>{
    res.send(`Welcome ${req.cookies.firstname} your password is ${req.cookies.Password}`)
})
app.listen(5689)