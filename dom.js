//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.forms);

//console.log(document.getElementById('header-title'));
const ti= document.getElementById('header-title');
const header =document.getElementById('main-header');
//console.log(ti);
//ti.textContent='Hello';
ti.style.borderBottom='solid 5px #000';
header.style.borderBottom='solid 5px #000';

const item = document.getElementsByClassName('list-group-item');
item[0].style.color='green';
item[0].style.fontWeight='bold';

item[1].style.color='green';
item[1].style.fontWeight='bold';

item[2].style.color='green';
item[2].style.fontWeight='bold';

item[3].style.color='green';
item[3].style.fontWeight='bold';