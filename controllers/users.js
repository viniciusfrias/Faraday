let User = require('../models/user')
const mongoose = require('mongoose');
const generator = require('generate-password');
const { findById } = require('../models/user');

module.exports = {
    fetchLogin,
    genPasswd
}

async function fetchLogin (req,res) {
    let thisUser = await User.findById(req.params.id)
    
}

function genPasswd(){
    let password = generator.generate({
        
    })
}