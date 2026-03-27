http=require('http');
http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"Content-type":"text/html"})
        res.write("<h1>Home Page</H1><br><li><ul><a href='/'>Home</ul><ul><a href='/about'>About</ul><ul><a href='/contact'>Contact</ul></li>")
    }
    else if(req.url=="/about"){
        res.writeHead(200,{"Content-type":"text/html"})
        res.write("<H1>About</H1><br><li><ul><a href='/'>Home</ul><ul><a href='/about'>About</ul><ul><a href='/contact'>Contact</ul></li>")
    }
    else if(req.url=="/contact"){
        res.writeHead(200,{"Content-type":"text/html"})
        res.write("<body style='background-color:lightblue'><h1>Contact Page</H1><br><li><ul><a href='/'>Home</ul><ul><a href='/about'>About</ul><ul><a href='/contact'>Contact</ul></li></body>")
    }
    else{
        res.writeHead(200,{"Content-type":"text/html"})
        res.write("<h1 >Page Not Found!!</H1>")
    }
    res.end()
}).listen(5678,()=>{console.log("Connected!!");})