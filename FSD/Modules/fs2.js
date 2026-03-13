var fs=require('fs');
//fs.mkdirSync("FSD2");
fs.writeFileSync("FSD2/lac1.txt","Module Concept");
console.log(fs.readFileSync("FSD2/lac1.txt","utf-8"));
fs.unlinkSync("FSD2/lac1.txt")
console.log("Program Executed!!");