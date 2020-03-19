const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required",
        minlength: 4,
        maxlength:150
    },
    body: {
        type: String,
        required: "Body is required",
        minlength: 4,
        maxlength:2000

    }

})
module.exports = mongoose.model("Event", eventSchema);