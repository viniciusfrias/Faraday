// const login = require("../../models/login");

// variables
const list = document.getElementById('sub-menu')
const buttons = {
    logins: {
        id: 'logins',
        inputLabelel: 'Add new login',
        url: 'http://localhost:3000/id/logins',
        data: ['username', 'password', 'url']
    },
    accounts: {
        id: 'accounts',
        inputLabelel: 'Add new account',
        url: 'http://localhost:3000/id/accounts',
        data: ['account_name', 'category']
    },
    notes: {
        id: 'notes',
        inputLabelel: 'Add new note',
        url: 'http://localhost:3000/id/notes',
        data: ['title', 'note']
    },
}

// add event listener for logins-btn
function addButton(event) {
    const currentBtn = document.getElementById('btn');
    const newBtn = buttons[event.id];
    const btn = document.createElement('button');
    list.innerHTML = "";

    // if (currentBtn) {
    //     currentBtn.parentNode.removeChild(currentBtn);
    // }

    btn.id = 'btn';
    btn.innerHTML = newBtn.inputLabelel;
    list.appendChild(btn);
    console.log(newBtn)

    btn.addEventListener('click', function() {
        const form = document.createElement('form');
        form.setAttribute('method', 'POST');
        form.setAttribute('action', '/id/' + newBtn.id);
        form.id = 'form';
        list.appendChild(form);
        for (d of newBtn.data) {
            let inputLabel = document.createElement('label');
            let input = document.createElement('input');
            inputLabel.setAttribute('for', d);
            inputLabel.innerHTML = d;
            input.setAttribute('type', 'text');
            input.setAttribute('name', d);
            input.id = d + '-input';
            form.appendChild(inputLabel);
            form.appendChild(input);
        }
        const inputSub = document.createElement('input');
        inputSub.setAttribute('type', 'submit');
        inputSub.setAttribute('value', 'Save');
        form.appendChild(inputSub);
    })
    

    return fetch(newBtn.url)
        .then(res => res.json())
        .then(res => {
            console.log(res);
        });

}