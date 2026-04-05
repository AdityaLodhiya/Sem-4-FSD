var url=require("url")
var addr="https://localhost:8080/data?T1=25&T2=23&T3=24"
process.noDeprecation=true
var fs=require('fs');

var d=url.parse(addr,true)
t1=parseInt(d.query.T1)
t2=parseInt(d.query.T2)
t3=parseInt(d.query.T3)
avg=(t1+t2+t3)/3
console.log(avg);
fs.writeFileSync("avg_marks.txt","Avrage Marks: "+JSON.stringify(avg));