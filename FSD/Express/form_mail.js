expr=require('express')
app=expr()
nm=require('nodemailer')
app.use(expr.static('./',{index:'form1.html'}))
app.get('/data',(req,res)=>{
    trans=nm.createTransport({
        host:'smtp.gmail.com',
        port:465,
        auth:{
            user:'adityalodhiya111@gmail.com',
            pass:'mums ypba qxvw pjdq'
        }
    })

    mail={from:"adityalodhiya111@gmail.com",
        to:`${req.query.email}`,
        subject:"Test Mail",
        html:`Hello ${req.query.uname}`
    }

    trans.sendMail(mail,(err,info)=>{
        if(err){res.send('Mail Sent')}
        else{'Mail not sent'}
    })
})
app.listen(5678)