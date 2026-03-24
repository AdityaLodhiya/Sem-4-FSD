var url=require("url")
var addr="https://localhost:8080/data?name=abc&age=25#about"
process.noDeprecation=true      //For removing the warning
var d=url.parse(addr)
console.log(d.query);
console.log(d.query.name)


var d=url.parse(addr,true) 

console.log(d);
console.log(d.protocol);
console.log(d.search);
console.log(d.query);
console.log(d.query.name);


