expr=require('express')
app=expr()
sess=require('express-session')
app.use(sess({
    secret:'This is secret',
    resave:false,
    saveUninitialized:false
}))
app.use(expr.static('../public',{index:'form.html'}))

app.get('/savesession',(req,res)=>{
    req.session.fname=req.query.fname
    req.session.pass=req.query.pass
    res.redirect('/fetch')
})

app.get('/fetch',(req,res)=>{
    if(req.session.fname=="admin" & req.session.pass=="admin@123"){
    res.send(`Welcome ${req.session.fname} <br><br><a href="/destroy">Log out</a>`)
    }
    else{
        res.clearCookie('connect.sid')
        res.send(`Enter Valid username and pass <br><br> <a href="/">Log in</a>`)
    }
})

app.get("/destroy",(req,res)=>{
    //req.session.destroy()
    res.clearCookie('connect.sid')
    res.send(`Session Destroyed <br><br> <a href="/">Log in</a>`)
})
app.listen(5555)