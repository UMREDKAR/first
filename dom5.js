const itemList = document.querySelector('#items');

//parentElement
/*
console.log(itemList.parentNode);
itemList.parentNode.style.background='grey';
console.log(itemList.parentNode.parentNode.parentNode);
*/

//parentElement
/*
console.log(itemList.parentElement);
itemList.parentElement.style.background='yellow';
console.log(itemList.parentElement.parentElement.parentElement);
*/

//childNodes
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.background='red';

//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='hello 1'

//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='hello 4'

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);

//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='blue';

//createElement
let newdiv = document.createElement('div');

//Add Class
newdiv.className='hello';

//Add Id
newdiv.id='hh';

//setAttribute
newdiv.setAttribute('title','Hello Div');

//create text Node
let newdivtext = document.createTextNode('HEllo Word');

//append text to div
newdiv.appendChild(newdivtext);

let container = document.querySelector('header .container');
let h1 =document.querySelector('header h1');

let li = document.querySelector('.list-group');
let li1 = document.querySelector('.list-group-item');

console.log(newdiv);

container.insertBefore(newdiv,h1);
li.insertBefore(newdiv,li1);