
/* create delete button for all items in list*/

var listItems=document.getElementsByClassName('list-item');

for(let item of listItems){
    var button=document.createElement('button');
    var xText=document.createTextNode('\u00D7');
    button.className='delete';
    button.appendChild(xText);
    item.append(button);
}

/* toggle checked */

var list = document.querySelector('ul');

list.addEventListener('click',function(ev) {
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
},false);

/* delete item from list */

addOnclickEventForDelete();

function addOnclickEventForDelete() {
    var deleteItem = document.getElementsByClassName('delete');
    for (let item of deleteItem){
        item.onclick=function() {
            if( confirm('Are you sure?')== true){
                var div=this.parentElement;
                div.remove();
            }
        }
    }
}


function addElementToList(){
    var listItem=document.createElement('li');
    var text=document.getElementById('text-box').value;
    var textNode=document.createTextNode(text);

    var button=document.createElement('button');
    var xText=document.createTextNode('\u00D7');
    button.className='delete';
    button.appendChild(xText);

    if(text===''){
        alert('You must enter some texts.');
    }
    else{
        listItem.appendChild(textNode);
        listItem.className='list-item';
        listItem.append(button);
        document.getElementById('text-box').value='';
        document.getElementById('list').append(listItem);
    }
    addOnclickEventForDelete(); 
}
