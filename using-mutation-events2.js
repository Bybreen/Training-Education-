var elList, addLink, newEl, newText. counter, listItems;
elList = decoment.getElementById('list);  
addLink = document.querySelector('a');
counter = document.getElementById('counter');

function.addItem(e) {
e.preventDefalut();
newEl = document.createElement('li');
newText = document.createTextNode('new list item');
newEl.appendChild(newText);
elList.appendChild(newEl);
}

function updateCount() {
listItems = list.getElementByTagName('li').length;
counter.innerHTML = listItems;
}
