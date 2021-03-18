const mongoose = require('mongoose');
require('mongoose-type-url')
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    description: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    URL: mongoose.SchemaTypes.Url,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
})

module.exports = mongoose.model('Login', loginSchema)