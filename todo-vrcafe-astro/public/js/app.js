function updateUI() {
  const filtered = applyFilters(tasks);
  renderTasks(filtered);
  initDragAndDrop(); 
  updateProgress(tasks);
  updateCategoryLayout();
  applyPermissions(); 
}

let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
  tasks = initTasks();
  applyTranslations();
  initTaskInput();
  updateUI();
});


const NEON_KEY = "vrcafe_neon";

function applyNeonFromStorage() {
  const enabled = localStorage.getItem(NEON_KEY) === "1";
  document.body.classList.toggle("neon", enabled);

  // подсветка кнопки
  document.querySelector(".neon-toggle")?.classList.toggle("active", enabled);
}

function toggleNeon() {
  const enabled = !document.body.classList.contains("neon");
  document.body.classList.toggle("neon", enabled);

  localStorage.setItem(NEON_KEY, enabled ? "1" : "0");
  document.querySelector(".neon-toggle")?.classList.toggle("active", enabled);
}

// Важно: вызвать при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  applyNeonFromStorage();
});
