const inputFieldEl=document.querySelector('#input');
const addButtonEl = document.querySelector('#button');

addButtonEl.addEventListener('click', function(){
    const input = inputFieldEl.value;
    console.log(input);
    const listItemEl = document.createElement('li');
    listItemEl.classList.add('cart-item');
    listItemEl.textContent = input;
    const listEl = document.querySelector('#cart');
    
    listEl.appendChild(listItemEl);
    inputFieldEl.value = '';

    });

