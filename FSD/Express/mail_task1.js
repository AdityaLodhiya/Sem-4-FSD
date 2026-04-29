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
    to:"client.onapp1@gmail.com",
    subject:"Purchase order:123456",
    html:"<p>Dear Client<br><br>thank you for ordaring <b style='colour:'red font-size:20px'>Product name:'abc'</b>from our site<br><br><b style='colour:'red font-size:20px'>Dilevry date:...</b></p>",

}

trans.sendMail(mail,(err,info)=>{
    if(err){console.log(err)}
    else{console.log(info);
    }
})