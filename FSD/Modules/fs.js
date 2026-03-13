var fs=require('fs');
fs.writeFileSync("hello.txt","Good Morning!!!");

fs.appendFileSync("hello.txt","\nGood Afternoon!!"); //If not exists then will create new

var a=fs.readFileSync("hello.txt").toString();
console.log(a);
var b=fs.readFileSync("hello.txt",'UTF-8');
console.log(b);

fs.renameSync("hello.txt","hii.txt");

fs.unlinkSync("hii.txt");