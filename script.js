// Select elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// Add task
addBtn.addEventListener("click", function() {
  const taskText = input.value.trim();
  if(taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Remove</button>
  `;

  list.appendChild(li);
  input.value = "";
  input.focus();
});

// Delete task
list.addEventListener("click", function(e) {
  if(e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
