expr=require("express")
app=expr()
app.use(expr.urlencoded({extended:true}))
const a=app.post("/data",(req,res,next)=>{
    res.send(`<form method="post" action="/data">
    UserName: <input type="text" name="uname">
    <br><br>
    Password <input type="password" name="" name="pass">
    <br><br>
    <input type="submit">
</form>`)
    if(req.body.uname=="admin" && req.body.pass=="1234"){
        next()
    }
    else{
        res.send(` <h1 style="color:red; text-align:center;">
        Invalid Username or Password
    </h1>
    <div style="text-align:center;">
        <a href="/">Go Back</a>
    </div>`)
    }
})
const b=(req,res,next)=>{
    res.send("Login Successful")
}
app.use("/data",a,b)

app.listen(5623,()=>{console.log("Server Started");})