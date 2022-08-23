// document.body.children[1].children[0].href = 'https://google.com';

let tagElement = document.querySelector('h1');
tagElement = 'This is modified sentence';

let idSelecetor = document.getElementById('torrent-scanner-popup');
idSelecetor = 'It would show null if we did not change it!';

let colorSelector = document.querySelector('background');
colorSelector = 'black';
let linkSelector = document.querySelector('p a');
linkSelector.href = 'https://google.com';

//! Add an element 
//? 1.Create new element
let newElement = document.createElement('a');
newElement.href = 'https://microsoft.com';
newElement.textContent = 'This element leads to Microsoft';
//? 2. Get access to parent element that holds new element 
let paragraphElement = document.querySelector('p');
//? 3.Insert new element into the parent element content 
paragraphElement.append(newElement);

// ! Remove an element 
// ?1.Select an element
let deletingElement = document.querySelector('h1');
// ?2.Remove it
deletingElement.remove();
deletingElement.parentElement.removeChild(deletingElement); // for older browsers

//! Move elements
paragraphElement.parentElement.append(paragraphElement);

 // console.log(linkSelector);
// console.log(idSelecetor);
// console.log(tagElement);
// console.dir(document.body);