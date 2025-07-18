// Load saved tasks on page load
window.onload = function () {
  loadTasks();
};

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <span>
      <button onclick="toggleDone(this)">✅</button>
      <button class="delete-btn" onclick="deleteTask(this)">🗑️</button>
    </span>
  `;
  taskList.appendChild(li);

  input.value = "";
  saveTasks();
}

function toggleDone(button) {
  const li = button.parentElement.parentElement;
  li.classList.toggle("done");
  saveTasks();
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
  saveTasks();
}

function saveTasks() {
  const tasks = document.getElementById("taskList").innerHTML;
  localStorage.setItem("tasks", tasks);
}

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    document.getElementById("taskList").innerHTML = saved;
  }
}
