const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addBtn");
const removeBtn =document.getElementById('remove');




// to add
function AddTask() {
  if (inputBox.value === "") {
    alert("u must write somthing");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.append(li);
    inputBox.value=""
  }
}

addBtn.addEventListener("click", AddTask);

// to remove 
removeBtn.addEventListener('click', function(e){
        let listItem = document.querySelectorAll('li')
        listItem.forEach(item => {
            item.remove();
        })
})

