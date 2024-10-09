// Declare variables to store the input and li values
let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container');

// Calling a function to add task
function addTask() {
  if (inputBox.value === '') {
    alert("Please write something in the input field"); // Alert if input is empty
  } else {
    let li = document.createElement("li"); // Create a new list item
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Create the cross icon to delete task
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    span.className = "close"; // Add a class for styling the close button
    li.appendChild(span); 
  }

  inputBox.value = ""; // Clear the input field after adding a task
  saveData();//to stored data
}

// Event listener for the list container
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
     e.target.parentElement.remove();
     saveData();
  }
}, false);


// function for saving data
function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
