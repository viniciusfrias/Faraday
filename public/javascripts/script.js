// variables
const list = document.getElementById('sub-menu')
const display = document.getElementById('display')

//Object to reference User model
const buttons = {
    logins: {
        id: 'logins',
        inputLabelel: 'Add new login',
        url: 'http://localhost:3000/id/logins',
        data: ['description','username', 'password', 'url']
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

    btn.id = 'btn';
    btn.innerHTML = newBtn.inputLabelel;
    list.appendChild(btn);
    console.log(newBtn)
    display.innerHTML = "";
    
    //event listener on button that shows form for new data input
    btn.addEventListener('click', function() {
        let form = document.createElement('form');
        form.setAttribute('method', 'POST');
        form.setAttribute('action', '/id/' + newBtn.id);
        form.id = 'form';
        display.innerHTML = "";
        display.appendChild(form);
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
    
    //fetching the existing data from user in the database
    return fetch(newBtn.url)
        .then(res => res.json())
        .then(res => {
            for (r of res) {
                const valArr = Object.values(r);
                let item = document.createElement('button');
                item.innerHTML = valArr[1];
                item.id = "item" + res.indexOf(r);
                list.appendChild(item);
                list.appendChild(document.createElement('br'));
                item.addEventListener('click', function() {
                    display.innerHTML = "";
                    const displayList = document.createElement('ul');
                    display.appendChild(displayList);
                    for (let i = 2; i < valArr.length - 4; i++){
                       let displayItem = document.createElement('li');
                       displayItem.innerHTML = valArr[i];
                       displayList.appendChild(displayItem);
                       if(i === valArr.length - 5){
                           const copyBtn = document.createElement('button');
                           const openTab = document.createElement('button');
                           copyBtn.innerHTML = 'Copy to Clipboard';
                           openTab.innerHTML = "Open in new tab";
                           copyBtn.id = 'copy-button';
                           openTab.id = 'open-button';
                           displayList.appendChild(copyBtn);
                           displayList.appendChild(openTab);
                       }
                   }
                })               
            }
        });
}

