expr=require("express")
app=expr()
multer=require('multer')
app.use(expr.static('../public',{index:'form.html'}))
storage=multer.diskStorage({destination:'File',
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+file.pdf)
    }
})

upload=multer({storage})
app.post('/upload',upload.single,(req,res)=>{
    let file=req.file
    if(file){
        res.send(`file name ${i.originalname} uploaded`)
    }
    else{
        res.send("Cant Upload")
    }
})
app.listen(5679)