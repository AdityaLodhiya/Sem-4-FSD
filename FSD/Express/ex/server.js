expr=require("express")
app=expr()
app.use(expr.static('./'))
app.listen(5623,()=>{console.log("Server Started");})