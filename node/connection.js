const mongoose = require("mongoose")

const url = 'mongodb+srv://shashwat:Tgb6ZZWYqnLOxsc3@cluster0.akm6nyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connection = async () =>{
    return mongoose.connect(url)
}

module.exports = connection;