http=require('http');
fs=require('fs')
http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"Content-type":"text/html"})
        res.write("<h1>Hello</h1><br><img src='Screenshot (12).png'/>")
    }
    else if(req.url=="/a.png"){
        data=fs.readFileSync('Screenshot (12).png')
        res.writeHead(200,{"Content-type":"image/png"})
        res.write(data)
    }
    res.end()
}).listen(5678,()=>{console.log("Connected at port 5678");})