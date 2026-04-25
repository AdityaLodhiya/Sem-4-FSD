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
    res.send(`Welcome ${req.session.fname} <br><br><a href="/destroy">Log out</a>`)
})

app.get("/destroy",(req,res)=>{
    //req.session.destroy()
    res.clearCookie('connect.sid')
    res.redirect('/')
})
app.listen(5555)