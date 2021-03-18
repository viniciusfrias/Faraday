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
    newNote,
    delLogin,
    delAccount,
    delNote,
    putLogin,
    putAccount,
    putNote
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
    res.render('dashboard', {user: req.user})
}

// function to fecth the logins from the user's document
async function fetchLogins (req,res) {
    let allLogins = await Login.find({}).where('user')
    .equals(req.user._id);
    res.send(allLogins);   
}

// function to delete logins
async function delLogin (req,res) {
    console.log(req.params.id)
    await Login.findByIdAndDelete(req.params.id);
    res.redirect('/dashboard')
}

// function to update login
async function putLogin (req,res) {
    console.log(req.params.id);
    await Login.findByIdAndUpdate(req.params.id, {
        description: req.body.description,
        username: req.body.username,
        password: req.body.password,
        URL: req.body.url
    })
    res.redirect('/dashboard')
}

// Post new account entry to database
async function newAccount(req,res) {
    await Account.create({
        account_name: req.body.account_name,
        category: req.body.category,
        user: req.user._id
    })
    res.render('dashboard', {user: req.user})
}

// Function to fecth the accounts from the user's document
async function fetchAccounts (req,res) {
    let allAccounts = await Account.find({}).where('user')
    .equals(req.user._id);
    res.send(allAccounts)
}

// function to delete account
async function delAccount (req,res) {
    console.log(req.params.id)
    await Account.findByIdAndDelete(req.params.id);
    res.redirect('/dashboard')
}

// Update account
async function putAccount(req,res) {
    await Account.findByIdAndUpdate(req.params.id, {
        account_name: req.body.account_name,
        category: req.body.category,
    })
    res.redirect('/dashboard')
}

// Post new notes entry to database
async function newNote(req,res) {
    await Note.create({
        title: req.body.title,
        note: req.body.note,
        user: req.user._id
    })
    res.render('dashboard', {user: req.user})
}

// Function to fecth the notes from the user's document
async function fetchNotes (req,res) {
    let allNotes = await Note.find({}).where('user')
    .equals(req.user._id);
    res.send(allNotes)
}

// function to delete account
async function delNote (req,res) {
    console.log(req.params.id)
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/dashboard')
}

// Function to fecth the news from API
async function fetchNews (req,res) {
    let thisUser = await User.findById(req.params.id)
    
}

// Update note
async function putNote(req,res) {
    await Note.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        note: req.body.note,
    })
    res.redirect('/dashboard')
}

// function to generate ramdon password using npm module generate-password
function genPasswd(req,res){
    let password = generator.generate({
        length: 14,
        numbers: true,
        symbols: true
    });
    
    res.send(`"${password}"`);
}