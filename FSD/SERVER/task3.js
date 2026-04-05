http=require('http')
fs=require('fs')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
    data=fs.readFileSync("task3.dummy.html")
    res.end(data)
}).listen(5678)
