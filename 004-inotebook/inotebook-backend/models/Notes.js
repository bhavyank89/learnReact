import mongoose from 'mongoose';

const notesSchema = new mongoose.Schema({
    // Linking this Notes model with User model
    // Similar to foreign key in SQL
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
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
        default: "general"
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
});
const Notes = mongoose.model('Notes', notesSchema);

export default Notes;