expr=require("express")
app=expr()
const path = require("path"); 
app.use(expr.static(path.join(__dirname, "../public")));
//app.use(expr.static('../public',{index:'form.html'}))
app.listen(5623,()=>{console.log("Server Started");})