const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    count:{
        type: Number,
        required: true,
    }

})
module.exports = mongoose.model('Card',cardSchema)
