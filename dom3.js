/QuerySelector

const item = document.querySelector('.list-group-item:nth-child(2)');
item.style.background='green';

const it = document.querySelector('.list-group-item:nth-child(3)');
it.style.visibility='hidden';

//QuerySelectorAll

const font = document.querySelectorAll('.list-group-item');
font[1].style.color='green';

const odd = document.querySelectorAll('li:nth-child(odd)');

for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}