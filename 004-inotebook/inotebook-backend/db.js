const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";
//String copied from mongoDB compass

//Mongoose returns a promise
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully!!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToMongo;