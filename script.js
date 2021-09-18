var x;

function appendList(){
  var container = document.getElementById('list_container');
  var new_item = document.createElement('li');
  var inputfield = document.getElementById('inputfield')
  var string = new String(inputfield.value)
  inputfield.value = '';

  new_item.className = 'todo_listitem';
  new_item.setAttribute('id', Math.random()); /*random float number CHANGE THIS*/
  new_item.innerHTML = '<div class="todo_listitem_text">' + string + '</div><a class="todo_listitem_del_button" onclick="removeItem(this.parentNode)">x</a>';

  document.getElementById('list_container').appendChild(new_item);
}

function removeItem(clicked_item_parent){
  clicked_item_parent.remove();

}
