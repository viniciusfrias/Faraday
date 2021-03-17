let User = require('../models/user')
let Login = require('../models/login')
let Note = require('../models/note')
const mongoose = require('mongoose');
const generator = require('generate-password');

module.exports = {
    fetchLogins,
    fetchAccounts,
    fetchNotes,
    fetchNews,
    genPasswd
}

// function to fecth the logins from the user's document
async function fetchLogins (req,res) {
    // request to Mongo to get the logins, then pass them to the 
    // dashboard view to display inside the unordered list
    // and append the "Add login" button to the end of the list
    

    res.send(req.user.login)
    
}

// Function to fecth the accounts from the user's document
async function fetchAccounts (req,res) {
    let thisUser = await User.findById(req.params.id)
    
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