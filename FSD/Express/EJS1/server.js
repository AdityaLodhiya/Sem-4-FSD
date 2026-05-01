expr=require('express')
app=expr()
app.set('view engine','ejs')
app.use(expr.urlencoded())
app.get('/',(req,res)=>{
    res.render('form')
})
app.post('/data',(req,res)=>{
    fname=req.body.fname
    mark=req.body.mark
    res.render('out',{fname,mark})
})
app.listen(5678)