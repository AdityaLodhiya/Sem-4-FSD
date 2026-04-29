expr=require("express")
nm=require('nodemailer')
var trans=nm.createTransport({
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:'',
        pass:''
    }
})
var mail={from:"",
    to:"",
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
