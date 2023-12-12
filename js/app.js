const itemInput = document.getElementById('itemInput');

const itemList = document.getElementById('itemList');

function addItem(){
    const newItemText = itemInput.value;
    const newItem = createListItem(newItemText);
    itemList.appendChild(newItem);
}

function createListItem(text){
    const listItem = document.createElement('li');
    listItem.textContent = text;
    return listItem;
}