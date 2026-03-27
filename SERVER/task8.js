addr="https://www.google.com/exam.txt?c1=Hello&c2=FSD2T1Test&c3=WelcometoLJU#AllTheBest"
url=require("url")
fs=require('fs')
var q=url.parse(addr,true)
http=require("http")
process.noDeprecation=true

fs.writeFileSync(q.pathname,JSON.stringify(q.query.c1+"\n"+q.query.c2+"\n"+q.search))
//http.createServer((req,res)=>{
    
//}).listen(5678,()=>{console.log("connected!!");})
