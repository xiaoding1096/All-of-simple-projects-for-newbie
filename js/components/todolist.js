const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("btn-task-input");
const todolist = document.getElementById("todolist");
const todolistContainer = document.querySelector(".todolist-container");

const addTask = () => {
  const tasks = loadFromLocalStorage() || [];
  const task = taskInput.value.trim();
  if (task !== "") {
    todolistContainer.style.setProperty("display", "block");
  }

  createTaskElement(task);
  tasks.push(task);
  saveToLocalStorage(tasks);
  taskInput.value = "";
};

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function loadFromLocalStorage() {
  try {
    const value = localStorage.getItem("todolist");
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu từ localStorage:", error);
    return [];
  }
}

function saveToLocalStorage(task) {
  localStorage.setItem("todolist", JSON.stringify(task));
}

function createTaskElement(task) {
  const listItem = document.createElement("li");
  const textcontent = document.createElement("span");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn-delete");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    removeItem(task);
    listItem.remove();
    // ẩn container nếu không còn task
    if (todolist.children.length === 0) {
      todolistContainer.style.setProperty("display", "none");
    }
  });
  textcontent.textContent = task;
  listItem.appendChild(textcontent);
  listItem.appendChild(deleteButton);
  todolist.appendChild(listItem);
}

// sẽ chạy khi mở lại trang
document.addEventListener("DOMContentLoaded", () => {
  const tasks = loadFromLocalStorage();
  if (tasks.length > 0) {
    todolistContainer.style.setProperty("display", "block");
    tasks.forEach((task) => createTaskElement(task));
  }
});

function removeItem(taskToRemove) {
  const tasks = loadFromLocalStorage() || [];
  const updateTasks = tasks.filter((task) => task !== taskToRemove);
  saveToLocalStorage(updateTasks);
}
