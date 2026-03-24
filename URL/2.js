var url=require("url")
var addr="https://localhost:8080/data?month=march&year=2026#warupdate"
process.noDeprecation=true
var d=url.parse(addr,true)
if(d.query.year%4==0){
    console.log("Leap Year");
}
else{
    console.log("Not a Leap Year");
}
