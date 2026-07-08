const mg = require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/lec06')
    .then(() => { console.log("Success") })
    .catch((err) => { console.error(err) })

const myschema = new mg.Schema({
    title: String,
    director: String,
    genre: String,
    rating: Number,
    releaseYear: Number,
    language: String
})

mg.pluralize(null)
const movie = new mg.model('movie', myschema)

const createDoc = async () => {
    try {
        const pdata = [{ title: "3 Idiots", director: "Rajkumar Hirani", genre: "Comedy", rating: 9.2, releaseYear: 2009, language: "Hindi" },
            { title: "KGF Chapter 2", director: "Prashanth Neel", genre: "Action", rating: 8.8, releaseYear: 2022, language: "Kannada" },
            { title: "Dangal", director: "Nitesh Tiwari", genre: "Drama", rating: 8.9, releaseYear: 2016, language: "Hindi" },
            { title: "Baahubali", director: "S. S. Rajamouli", genre: "Action", rating: 8.7, releaseYear: 2015, language: "Telugu" },
            { title: "Jawan", director: "Atlee", genre: "Action", rating: 7.8, releaseYear: 2023, language: "Hindi" },
            { title: "Drishyam", director: "Nishikant Kamat", genre: "Thriller", rating: 8.4, releaseYear: 2015, language: "Hindi" },
            { title: "Pushpa", director: "Sukumar", genre: "Action", rating: 8.1, releaseYear: 2021, language: "Telugu" }];
        
        result = []
        result.push(await movie.insertMany(pdata))
        result.push(await movie.find({ rating: { $gt: 8.5 } }))
        result.push(await movie.find({}, { _id: 0, title: 1, rating: 1 }).sort({ rating: -1 }).skip(1).limit(1))
        result.push(await movie.updateMany({ genre: "Action" }, { $inc: { rating: 0.2 } }))
        result.push(await movie.countDocuments({ language: "Hindi" }))
        result.push(await movie.deleteOne({ title: "Jawan" }))
        console.log(result)
    }
    catch (err) {
        console.log('problem')
    }
}
createDoc()
