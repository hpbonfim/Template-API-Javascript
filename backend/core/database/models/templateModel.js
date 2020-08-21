const mongoose = require('mongoose')

const TemplateSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    }, //RFC 2822
    message: {
        type: String,
        require: true,
        unique: true
    },
    created_date: { 
        type: Date, 
        default: Date.now 
    },
    modified_date: { 
        type: Date, 
        default: Date.now 
    },
})

module.exports = mongoose.model('Template', TemplateSchema)