const mongoose = require('mongoose');
require('mongoose-type-url')
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    URL: mongoose.SchemaTypes.Url
}, {
    timestamps: true
})

module.exports = mongoose.model('Login', loginSchema)