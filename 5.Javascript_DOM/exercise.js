// select h1 element by  drilling into dom
let headSelector = document.body.childNodes[1];
console.log(headSelector);

// alternative 
// let h1Element = document.body.firstElementChild;
h1Element = document.body.children[0];
console.log(h1Element);

// firstChild ,previousSibling etc --> includes text nodes
// firstElementChild, previousElementSibling --> only html elements
let bodySelector = headSelector.parentElement;
console.log(bodySelector);

let siblinElement = headSelector.nextSibling.nextElementSibling.innerHTML;
console.log(siblinElement);

let newVar = document.getElementById('1');
console.log(newVar);

let querySelector = document.querySelector('.second');
querySelector.textContent = 'This second paragraph is changed';
console.log(querySelector.textContent);

