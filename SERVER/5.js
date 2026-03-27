const { readFileSync } = require("fs")

addr='http://localhost:5678/login.html'
fs=require("fs")
http=require("http")
url=require("url")
q=url.parse(addr)
http=require('http');
fs=require('fs')

http.createServer((req,res)=>{
    if(req.url==q.pathname){
       data=fs.readFileSync("."+q.pathname)
       res.writeHead(200,{"Content-type":"text/html"})
       res.write(data)
    }
    res.end()
}).listen(5678,()=>{console.log("Connected at port 5678");})