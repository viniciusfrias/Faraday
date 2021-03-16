const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    account_name: String,
    category: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Account', accountSchema)