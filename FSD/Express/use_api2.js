expr=require('express')
app=expr()
f=require('./api2.js')
app.use('/p',f)
app.listen(5678)    //http://localhost:5678/p/m