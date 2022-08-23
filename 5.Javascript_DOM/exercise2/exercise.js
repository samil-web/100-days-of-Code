// 1
let buttonHolder = document.getElementById('removeit');
let secondButton = document.querySelector('.addcolor button');

console.log(buttonHolder);
console.log(secondButton);
// 2. Add 'click' eventlistener to both buttons (with 2 different functions) 
// console.dir(buttonHolder)
// console.dir(event.target)

function func1(){
    secondParag.textContent = '';
}

function func2(){
    // firstParag.style.color = 'blue';
    firstParag.classList.add('change-color')
}

buttonHolder.addEventListener('click',func1);
secondButton.addEventListener('click',func2);

// firstChild ,previousSibling etc --> includes text nodes
// firstElementChild, previousElementSibling --> only html elements
let firstParag = document.body.children[0].lastElementChild.children[1];
console.log(firstParag);

let secondParag = document.body.children[0].lastElementChild.children[3];
// other way : firstParag.nextElementSibling.nextElementSibling 
console.log(secondParag);
