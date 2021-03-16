// variables
const list = document.getElementById('sub-menu')

//caching elements
const loginsButton = document.getElementById('logins-btn')
const accountsButton = document.getElementById('accounts-btn')
const notesButton = document.getElementById('notes-btn')
const newsButton = document.getElementById('news-btn')
const genPassButton = document.getElementById('gen-pass-btn')

// add event listener for logins-btn
function addButton(event) {
    return fetch('http://localhost:3000/id/logins')
        .then(res => res.json())
        .then(res => { 
            createAddButton(loginsFragment);
            addToFragment(res, loginsFragment);
        })
}

// functions
// function addToFragment(property, fragmentType){
//     property.forEach( function (el) {
//         let li = document.createElement('li')
//         li.innerHTML = el
//         fragmentType.appendChild(li)
//     })

//     list.appendChild(fragmentType);
// }

function createAddButton(parent){
    let btn = document.createElement('button')
    btn.innerHTML = "Add new";
    parent.appendChild(btn)
    btn.addEventListener( 'click', function(){
        let form = document.createElement(form);
        let descriptionInp = document.createElement()
    })
}

// // // add event listener for accounts-btn
// // accountsButton.addEventListener('click', async function() {
// //     await fetch('http://localhost:3000/id/accounts')
// // })

// // add event listener for notes-btn
// notesButton.addEventListener('click', async function() {
//     await fetch('http://localhost:3000/id/notes')
// })

// // add event listener for news-btn
// newsButton.addEventListener('click', async function() {
//     await fetch('http://localhost:3000/id/news')
// })

// // add event listener for gen-pass-btn
// genPassButton.addEventListener('click', async function() {
//     await fetch('http://localhost:3000/id/gen_passwd')
// })

