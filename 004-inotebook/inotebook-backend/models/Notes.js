import mongoose from 'mongoose';

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: general
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
});
const Notes = mongoose.model('Notes', notesSchema);

export default Notes;