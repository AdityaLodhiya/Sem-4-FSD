expr=require('express')
app=expr()
sess=require('express-session')
app.use(sess({
    secret:'This is secret',
    resave:false,
    saveUninitialized:false
}))
app.use(expr.static('../public',{index:'index.html'}))
app.use(expr.urlencoded({extended:true}))

app.post('/logindata',(req,res)=>{
    req.session.fname=req.body.fname
    res.redirect('../public/form.html')
})

app.post('/order',(req,res)=>{
    req.session.qty_supreme=req.body.qty_supreme
    req.session.qty_veg=req.body.qty_veg
    req.session.qty_farm=req.body.qty_farm
    req.session.size=req.body.size
    res.redirect("/fetch")
})

app.get('/fetch',(req,res)=>{
    res.send(`Items.....<br><br><br><br>`)
})
