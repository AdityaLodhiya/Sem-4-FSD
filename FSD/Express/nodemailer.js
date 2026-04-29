expr=require("express")
nm=require('nodemailer')
var trans=nm.createTransport({
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:'adityalodhiya111@gmail.com',
        pass:'mums ypba qxvw pjdq'
    }
})
var mail={from:"adityalodhiya111@gmail.com",
    to:"gaurav10806@gmail.com",
    subject:"Test Mail",
    //text:'Hello'
    //html:"<h1>Hello HTML Mail</h1>",
    attachments:[{filename:'a.png',
        path:'./a.png'
}]
}

trans.sendMail(mail,(err,info)=>{
    if(err){console.log(err)}
    else{console.log(info);
    }
})