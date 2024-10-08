let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container');

// now we will make the button functional 
function addTask(){
  if(inputBox.value === ''){
    alert("you must write something");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }
}