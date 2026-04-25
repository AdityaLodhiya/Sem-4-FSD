expr=require("express")
app=expr()
cp=require('cookie-parser')
app.use(cp())
app.use(expr.static("../public",{index:"index.html"}))
app.use(expr.urlencoded({extended:true}))
app.post("/data",(req,res)=>{
    const {name,email,msg,rating}=req.body
    const fb={name,email,msg,rating}
    res.cookie("feedback",fb,{"maxAge":10000})
    res.cookie("name",req.body.name)
    res.send(`<h1> Thank You for your feedback</h1> <a href="/show-fb"> Show Feedback</a><br><a href=/user>Show User info>`)
})
app.get("/show-fb",(req,res)=>{
    data=req.cookies.feedback
    if(data){
        res.send(`${data.name} \n ${data.email} \n ${data.msg} \n ${data.rating}`)
    }
    else{
        res.send("No Data Found")
    }
})
app.get("/user",(req,res)=>{
    const name=req.cookies.name
    res.send(`User Name: ${name}`)
})
app.listen(5623)