const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Enter title"],
        unique: true,
        trim: true,
        maxLength: [40, "Max 40 ch"]
    },
    desc: {
        type: String,
        required: true,
        maxLength: [200, "Max 200 ch"]
    }
})

module.exports = mongoose.model.Note || mongoose.model('Note', NoteSchema)