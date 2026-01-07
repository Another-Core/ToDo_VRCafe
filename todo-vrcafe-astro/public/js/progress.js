function updateProgress(tasks) {
  updateCategoryProgress("Work", "workProgress", tasks);
  updateCategoryProgress("Personal", "personalProgress", tasks);
  updateCategoryProgress("FreeTime", "freeTimeProgress", tasks);

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  const globalText = document.getElementById("globalProgressText");
  const globalFill = document.getElementById("globalProgressFill");

  globalText.textContent = `${completed} / ${total} (${percent}%)`;
  globalFill.style.width = `${percent}%`;
}


function updateCategoryProgress(category, elementId, tasks) {
  const categoryTasks = tasks.filter(t => t.category === category);
  const completed = categoryTasks.filter(t => t.completed).length;
  const total = categoryTasks.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  const el = document.getElementById(elementId);
  if (el) {
    el.textContent = `${completed} / ${total} (${percent}%)`;
  }
}