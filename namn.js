const input = document.querySelector('#input-field');
const button = document.querySelector('button');
const messageBox = document.querySelector('#message-box');

button.addEventListener('click', () => {
    const namn = input.value;

    for(let i = 0; i < namn.length; i++){
        console.log(namn[i]);
    }

    const li = document.createElement('li');
    const ul = document.createElement('ul');
    
    for(let i = namn.length-1; i > -1; i--){
        li.textContent += namn[i];
        ul.appendChild(li);
    }    
    
    messageBox.appendChild(ul);
});