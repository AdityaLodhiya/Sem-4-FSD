expr=require("express")
app=expr()
multer=require('multer')
app.use(expr.static('../public',{index:'form.html'}))
storage=multer.diskStorage({destination:'jambo',
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+image.png)
    }
})

upload=multer({storage,limits:{fileSize:1024*1024}})
app.post('/data',upload.array('myfile',3),(req,res)=>{
    let file=req.files
    if(file){
        for (i of file){
            res.write(`file name ${i.originalname}`)
        }
        res.send()
    }
    else{
        res.send("Cant Upload")
    }
})
app.listen(5679)