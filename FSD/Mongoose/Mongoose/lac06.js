const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/lac06')
.then(()=>{console.log('success')})
.catch((err)=>{console.error(err)})

const myschema=new mg.Schema({name:String,age:Number,status:Boolean})

mg.pluralize(null)
const person=new mg.model('person',myschema)


const createDoc=async()=>{
    try{
        const pdata=[{name:'XYZ',age:20,status:true},{name:'ABC',age:19,status:true}]
        
        const result=await person.insertMany(pdata)
        console.log(result)

        const r1=await person.find({name:'ABC'})
    }
    catch(err){console.log('problem')}
}
createDoc()