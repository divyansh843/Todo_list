function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const li = document.createElement("li");
    li.innerHTML = `
      <span onclick="toggleTask(this)">${taskText}</span>
      <button onclick="deleteTask(this)">Delete</button>
    `;
  
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
  
  function toggleTask(span) {
    span.parentElement.classList.toggle("completed");
  }
  
  function deleteTask(button) {
    button.parentElement.remove();
  }
  