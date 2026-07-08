const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/hi')
.then(()=>{console.log('success')})
.catch((err)=>{console.error(err)})

const myschema=new mg.Schema({name:String,age:Number,status:Boolean})

const person=new mg.model('apple',myschema)


const createDoc=async()=>{
    try{
        const pdata=[{name:'XYZ',age:20},{name:'ABC',age:19}]
        // const result=await person.insertMany(pdata)
        // console.log(result)
        
        const result1=await person.find({name:'XYZ'})
        console.log(result1)
    }
    catch(err){console.log('problem')}
}
createDoc()