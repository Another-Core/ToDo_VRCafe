const STORAGE_KEY = "vrcafe_tasks";

function loadTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function initTasks() {
  const stored = loadTasks();
  return stored ?? [];
}