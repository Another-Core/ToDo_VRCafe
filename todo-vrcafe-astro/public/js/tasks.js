// FILTER
function applyFilters(tasks) {
  return tasks.filter(task => {
    // STATUS
    if (currentStatusFilter === "completed" && !task.completed) {
      return false;
    }
    if (currentStatusFilter === "active" && task.completed) {
      return false;
    }

    // CATEGORY
    if (currentCategoryFilter !== "all" && task.category !== currentCategoryFilter) {
      return false;
    }

    return true;
  });
}

// RENDER TASKS ON SCREEN
function renderTasks(tasksList) {

  const containers = {
    Work: document.getElementById("workTasks"),
    Personal: document.getElementById("personalTasks"),
    FreeTime: document.getElementById("freeTimeTasks"),
  };

  Object.values(containers).forEach(c => (c.innerHTML = ""));

  tasksList.forEach(task => {
    // NEW ELEMENT
    const item = document.createElement("div");
    item.className = "task-item";
    item.dataset.id = task.id;
    item.draggable = false;

    // DRAG HANDLE
    const handle = document.createElement("span");
    handle.className = "drag-handle";
    handle.textContent = "⠿";
    handle.draggable = true;

    handle.addEventListener("dragstart", () => {
      draggedTaskId = task.id;
    });

    // CHECKBOX
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onchange = () => toggleCompleted(task.id);

    // TEXT
    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = task.title;

    // BUTTON EDIT
    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-ghost edit";
    editBtn.textContent = translations[currentLang].edit;
    editBtn.onclick = () => editTask(task.id);

    // BUTTON DELETE
    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-danger delete neon";
    delBtn.textContent = translations[currentLang].delete;
    delBtn.onclick = () => deleteTask(task.id);

    // SHOW DRAG HANDLE, CHECKBOX, TITLE
    item.append(handle, checkbox, title);

    // FOR ADMIN SHOW EDIT AND DELETE
    if (isAdmin()) {
      item.append(editBtn, delBtn);
    }

    // CHECK IF WE HAVE CONTAINER FOR ITEM
    containers[task.category]?.appendChild(item);
  });
}



// CREATE TASK (ONLY ADMIN)
function addTaskFromUI() {

  if (!isAdmin()) {
    alert("Only admin can create tasks");
    return;
  }
  const input = document.getElementById("taskInput");
  const title = input.value.trim();
  const category = document.getElementById("taskCategory").value;

  if (!title) return;

  const newTask = {
    id: Date.now(),
    title,
    category,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks(tasks);

  input.value = "";
  updateUI();
}

// UPDATE STATUS FILTER
function changeStatusFilter(value) {
  currentStatusFilter = value;
  updateUI();
}

// UPDATE CATEGORY FILTER
function changeCategoryFilter(value) {
  currentCategoryFilter = value;
  updateUI();
}

// DELETE TASK (ONLY ADMIN)
function deleteTask(id) {
  if (!isAdmin()) {
    alert("Only admin can delete tasks");
    return;
  }

  tasks = tasks.filter(t => t.id !== id);
  saveTasks(tasks);
  updateUI();
}

// MARK OR DISMARK TASK (ONLY ADMIN AND WORKER)
function toggleCompleted(id) {
  if (!(isAdmin() || isWorker())) {
    alert("Only worker or admin can complete tasks");
    return;
  }

  const task = tasks.find(t => t.id === id);
  if (!task) return;

  task.completed = !task.completed;
  saveTasks(tasks);
  updateUI();
}

// SHOW TASKS BY CATEGORIES
function updateCategoryLayout() {
  const categoriesContainer = document.querySelector(".categories");
  const blocks = document.querySelectorAll(".category-block");

  // SHOW ALL CATEGORIES
  if (currentCategoryFilter === "all") {
    categoriesContainer.classList.remove("single-view");
    blocks.forEach(b => b.classList.remove("active"));
    return;
  }

  // SHOW ONE CATEGORY
  categoriesContainer.classList.add("single-view");

  blocks.forEach(block => {
  const category = block.dataset.category;
  block.classList.toggle("active", category === currentCategoryFilter);
  });
}

// CREATE TASK BY PRESSING ENTER (ONLY ADMIN)
function initTaskInput() {
  const input = document.getElementById("taskInput");
  if (!input) return;

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTaskFromUI();
    }
  });
}

// EDIT TASK (ONLY ADMIN)
function editTask(id) {
  if (!isAdmin()) return;

  const task = tasks.find(t => t.id === id);
  if (!task) return;

  const oldTitle = task.title;
  const newTitle = prompt("Edit task text:", oldTitle);

  if (newTitle === null) return;
  const trimmed = newTitle.trim();
  if (!trimmed) return;
  if (trimmed === oldTitle) return;

  task.title = trimmed;

  saveTasks(tasks);
  updateUI();
}
