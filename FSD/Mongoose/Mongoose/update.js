const mg = require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/lec06')
    .then(() => { console.log("Success") })
    .catch((err) => { console.error(err) })

const myschema = new mg.Schema({
    name:String,age:Number,active:Boolean
})

mg.pluralize(null)
const movie = new mg.model('data', myschema)

const createDoc = async () => {
    try{
        // const pdata=new movie({name:'test',age:23,active:true})
        // await pdata.save()

        // const t1=await movie.updateOne({name:'test'},{name:'ABC',age:20,active:true})

        const f1=await movie.findOne({name:'ABC'})
        console.log(f1._id)

        // const ul=await movie.findByIdAndUpdate(f1._id,{name:'test'},{new:true})

        const d1=await movie.findByIdAndDelete(f1._id)
        if(d1){
            console.log('Person Deleted')
        }
        else{console.log('No Id Found')}

    }
    catch(err){
        console.log(err)
    }
}
createDoc()