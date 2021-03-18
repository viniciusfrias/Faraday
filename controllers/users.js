let User = require('../models/user')
let Login = require('../models/login')
let Account = require('../models/account')
let Note = require('../models/note')
const mongoose = require('mongoose');
const generator = require('generate-password');

module.exports = {
    fetchLogins,
    fetchAccounts,
    fetchNotes,
    fetchNews,
    genPasswd,
    newLogin,
    newAccount,
}

// Post new login entry to database
async function newLogin(req,res) {
    await Login.create({
        description: req.body.description,
        username: req.body.username,
        password: req.body.password,
        URL: req.body.url,
        user: req.user._id
    })
    res.render('dashboard')
}

// function to fecth the logins from the user's document
async function fetchLogins (req,res) {
    // request to Mongo to get the logins, then pass them to the 
    // dashboard view to display inside the unordered list
    // and append the "Add login" button to the end of the list
    let allLogins = await Login.find({}).where('user')
    .equals(req.user._id);
    console.log(allLogins);
    res.send(allLogins);   
}

// Post new account entry to database
async function newAccount(req,res) {
    await Account.create({
        account_name: req.body.account_name,
        category: req.body.category,
        user: req.user._id
    })
    res.render('dashboard')
}

// Function to fecth the accounts from the user's document
async function fetchAccounts (req,res) {
    let allAccounts = await Account.find({}).where('user')
    .equals(req.user._id);
    res.send(allAccounts)
}

// Function to fecth the notes from the user's document
async function fetchNotes (req,res) {
    let thisUser = await User.findById(req.params.id)
    
}

// Function to fecth the news from API
async function fetchNews (req,res) {
    let thisUser = await User.findById(req.params.id)
    
}

// function to generate ramdon password using npm module generate-password
function genPasswd(){
    let password = generator.generate({
        
    })
}