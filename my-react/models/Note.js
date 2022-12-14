const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    description: {
        type: String,
        required: true,
        maxlength: [5000, 'Description cannot be more than 5000 characters']
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);
