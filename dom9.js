let sub =document.getElementById('my-form');

sub.addEventListener('submit',add);

function add(e)
{
    e.preventDefault();
    //console.log(1);

    let textName=document.getElementById('name').value;
    let textEmail=document.getElementById('email').value;

    localStorage.setItem(textName,textEmail);
}