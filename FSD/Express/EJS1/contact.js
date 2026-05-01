expr=require('express')
app=expr()
app.set('view engine','ejs')
app.use(expr.urlencoded())
app.get('/',(req,res)=>{
    res.render('contact')
})
app.post('/contact',(req,res)=>{
    res.send(`Thank you ${req.body.fname}, we have received your email ${req.body.email}`)
})
app.listen(5689)