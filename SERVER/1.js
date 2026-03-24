http=require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
    
    res.write("How Are You?")
    res.write("<H1>Hello Server</H1>")
    
    res.end("Hi")
    res.write("Hello x2")   //No Output
}).listen(5678,()=>{console.log("Server Created");})
