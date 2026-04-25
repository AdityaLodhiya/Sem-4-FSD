expr=require('express')
app=expr()
sess=require('express-session')
app.use(sess({
    secret:'This is secret',
    resave:false,
    saveUninitialized:false
}))
app.get('/',(req,res)=>{
    if(req.session.a){
        req.session.a++
        res.send('You visited this page')
    }
    else{
        req.session.a=1
        res.send('Welcome User')
    }
})
app.listen(5555)