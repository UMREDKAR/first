let form = document.getElementById('addForm');
let itemlist = document.getElementById('items');
let filter = document.getElementById('filter');


form.addEventListener('submit',addItem);
itemlist.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);


function addItem(e)
{
   e.preventDefault();
   let newItem = document.getElementById('item').value;
   let a = document.getElementById('itemc').value;
   let b =' ';
   

   let li=document.createElement('li');
   li.className='list-group-item';

   let add=document.createTextNode(newItem);
   let adds=document.createTextNode(a);
   let space=document.createTextNode(b);
   

   li.appendChild(add);
   li.appendChild(space);
   li.appendChild(adds);

   //create edit button
   let editbtn = document.createElement('button');
   editbtn.className='btn btn-dark btn-sm float-right';

   let addbtn1 = document.createTextNode('EDIT');
   editbtn.appendChild(addbtn1);
   li.appendChild(editbtn);

   //create delete button
   let deletebtn = document.createElement('button');
   deletebtn.className='btn btn-danger btn-sm float-right delete';

   let addbtn = document.createTextNode('X');
   deletebtn.appendChild(addbtn);
   li.appendChild(deletebtn);


   //console.log(li);
   itemlist.appendChild(li);
}


 

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
       let li = e.target.parentElement;
       itemlist.removeChild(li);
    }
    
}

function filterItems(e)
{
    let text = e.target.value.toLowerCase();
    let items = itemlist.getElementsByTagName('li');

        Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        let itName = item.childNodes[1].textContent;


        if((itemName.toLowerCase().indexOf(text) != -1) || (itName.toLowerCase().indexOf(text) != -1))
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }

    });
}