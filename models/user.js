const mongoose = require('mongoose');
require('mongoose-type-email')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    login: [{type: Schema.Types.ObjectId, ref: 'Login'}],
    account: [{type: Schema.Types.ObjectId, ref: 'Account'}],
    note: [{type: Schema.Types.ObjectId, ref: 'Note'}],
    googleId: String
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)

