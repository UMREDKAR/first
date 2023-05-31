let form = document.getElementById('addForm');
let itemlist = document.getElementById('items');

form.addEventListener('submit',addItem);
itemlist.addEventListener('click',removeItem);

function addItem(e)
{
   e.preventDefault();
   let newItem = document.getElementById('item').value;

   let li=document.createElement('li');
   li.className='list-group-item';

   let add=document.createTextNode(newItem);
   li.appendChild(add);
   
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