import mongoose from 'mongoose';

const connectToMongo = () => {
    mongoose.connect('mongodb://localhost:27017/inotebook')
        .then(() => {
            console.log("Connected to Mongoose!");
        }).catch((e) => {
            console.log(e.message);
        });
};

export default connectToMongo;
