var form =document.getElementById('addfom');
var deleteList = document.getElementById('itemList')
var filto =document.getElementById("filter")


filto.addEventListener("keyup", chung);
deleteList.addEventListener('click', remove);


form.addEventListener('submit', addItem);

function addItem(b){
  b.preventDefault();
  console.log('hello')


//..............................................................................
var newItem =document.getElementById('item').value;


//create li element
var li= document.createElement('li');
//name the li element
li.className ='list';
//append the input value in the list
li.appendChild(document.createTextNode(newItem))
//console.log(li)
//append the li to the output
itemList.appendChild(li)
var delbtn = document.createElement('button')
delbtn.className ="Ccancel";
delbtn.appendChild(document.createTextNode('x'));
li.appendChild(delbtn);
itemList.appendChild(li)
addTittle.appendChild(itemList)
}


function remove(e){
  if(e.target.classList.contains('Ccancel'))
  if(confirm('Are you sure ?')){
    var li = e.target.parentElement;
    itemList.removeChild(li) 
  }
  console.log(1)
}
function chung(event){
  var text =event.target.value.toLowerCase() ;
  //console.log(text)
  var itsems = itemList.getElementsByTagName("li")
  var itemArr =Array.from(itsems).forEach(function(item){
var itemName=item.firstChild.textContent;
//console.log(itemName)
if(itemName.toLowerCase().indexOf(text) != -1){
  item.style.display ="block"
}else{
  item.style.display ="none"
}
 })

  
}
