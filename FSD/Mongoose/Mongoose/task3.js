const mg = require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/lec06')
    .then(() => { console.log("Success") })
    .catch((err) => { console.error(err) })

myschema=new mg.schema({
    username:{type:String,required:true,match:/^[A-Za-z]+[0+9]$/,trim:true,upperCase:true},
    email:{type:String,requird:true,unique:true,match:/\s+@\s+\.+\s+/},
    age:{type:Number,min:18,max:65},
    role:{type:String,enum:['user','admin'],default:'user'}
},{strict:false})

mg.pluralize(null)
const data = new mg.model('task3', myschema)

const createDoc = async () => {
    try{
        const pdata=new data({nmae:'Aditya123',email:'aditya@gmail.com',age:19,role:'user'})
        await pdata.save()
    }
    catch(err){
        console.log(err)
    }
}