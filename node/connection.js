const mongoose = require("mongoose");

const url = 'mongodb+srv://riri240105:lRTVDDHQKYnqWkaJ@cluster1.w5ns8ob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';

const connection = async () => {
    try {
        await mongoose.connect(url);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection failed:", err);
    }
};

module.exports = connection;
