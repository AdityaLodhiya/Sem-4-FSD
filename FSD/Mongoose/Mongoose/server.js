const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/hi')
.then(()=>{console.log('success')})
.catch((err)=>{console.error(err)})

const myschema=new mg.Schema({name:String,age:Number,status:Boolean})

const person=new mg.model('Person',myschema)
mg.pluralize(null)

const Pdata=new person({name:'ABC',age:20,status:true})
Pdata.save()