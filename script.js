
// const inputBox = document.getElementById("todoInput");
// const listContainer = document.getElementById("todoList");

// function addTask(text){
//     if(inputBox.value === ''){
//         alert("you must write something!");
//     } else{
//         const li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.append(li);
//         let  span = document.createElement("span");
//         span.innerHTML= text;
//         li.appendChild(span);

//     }
//     inputBox.value ="";
//     saveData();
// }


// function saveData(){
//     localStorage.setItem("data",todoList.innerHTML);
// }
// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data"); 
// }
// showTask();


const inputBox = document.getElementById("todoInput");
const listContainer = document.getElementById("todoList");

function addTask(text) {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        const li = document.createElement("li");
        li.textContent = inputBox.value;

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        li.appendChild(deleteBtn);

        // Add event listener for deleting todo
        deleteBtn.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent event bubbling
            li.remove();
            saveData(); // Save updated list after deletion
        });

        listContainer.appendChild(li);
        inputBox.value = "";
        saveData(); // Save data after adding new task
    }
}

function saveData() {
    // Save the entire list HTML to localStorage
    localStorage.setItem("todoListHTML", listContainer.innerHTML);
}

function showTask() {
    // Retrieve and display the saved list from localStorage
    listContainer.innerHTML = localStorage.getItem("todoListHTML") || "";
}

// Load tasks on page load
showTask();


