
var textValues = document.querySelector("#textValues")
var btn = document.querySelector("#btn")
const toDoList = []
var allList = document.querySelector("#allList")


// Adding a list

function addToDo(){
    var list = textValues.value
    // Validating empty inputs<
    if (list === ""){
        alert('Please enter your list')
        return
    }
    // Add to Array
    toDoList.push(list)
    displayList(list)

    textValues.value = ""
    console.log(toDoList)
}


function displayList(list){
    var li = document.createElement("li")
    li.className="animate__animated animate__flipInX"
    idnum =  toDoList.length
    
    // Checkbox
    var input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    check_id = "check_"+String(idnum)
    input.id = check_id
    input.setAttribute("onclick", "checkItem(this.id)")
    li.appendChild(input)

    // List Item Text
    var anchor = document.createElement("a")
    anchor.setAttribute("onclick", "editListItem(this.id)")
    item_id = "item_"+String(idnum)
    anchor.id = item_id
    var text = document.createTextNode(list)
    anchor.appendChild(text)
    li.appendChild(anchor)

    // Delete Button
    var delButton = document.createElement("img")
    delButton.setAttribute("src", "images/close.png")
    delButton.setAttribute("onclick", "deleteItem(this.id)")
    del_id = "del_"+String(idnum)
    delButton.id = del_id
    delButton.className = 'del-btn'
    li.appendChild(delButton)


    allList.appendChild(li)
}



function checkItem(checkId){
    element = document.getElementById(checkId)
    parent = element.parentElement
    listItem = parent.querySelector("a")
    if(element.checked == true){
        listItem.style.textDecoration="line-through"
    }else{
        listItem.style.textDecoration="none"
    }
}


function deleteItem(delId){   
    element = document.getElementById(delId)
    parent = element.parentElement
    parent.remove("animate__animated animate__fadeOutUp")
    index = toDoList.indexOf(element)
    toDoList.splice(index, 1)
    console.log(toDoList)
}
var itemId2; 

function editListItem(itemId){
    input = document.querySelector("#textValues")
    button = document.querySelector("#btn")
    input.placeholder="Change item"
    button.setAttribute("onclick", "updateListItem(this.id)")
    buttonText = document.querySelector("#addUpdate")
    buttonText.innerHTML="Update"
    itemId2 = itemId
}

function updateListItem(){
    // console.log(itemId2)
    item = document.getElementById(itemId2)
    var list = textValues.value
    if (list === ""){
        alert('Please enter your list')
        return
    }
    item.innerHTML=list
    textValues.value = ""
    console.log(toDoList)

    input = document.querySelector("#textValues")
    input.placeholder="Add new item"
    button = document.querySelector("#btn")
    button = document.querySelector("#btn")
    button.setAttribute("onclick", "addToDo()")
    buttonText.innerHTML="Add"

    
}

