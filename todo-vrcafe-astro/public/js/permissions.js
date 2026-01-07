function applyPermissions() {
  const canCreate = isAdmin();
  const canDelete = isAdmin();
  const canComplete = isAdmin() || isWorker();

  // SHOW TASK FORM FOR ADMIN
  document.querySelector(".task-form").style.display = canCreate ? "flex" : "none";

  // SHOW DELETE BUTTON FOR ADMIN
  document.querySelectorAll(".task-item button.delete").forEach(btn => {
    btn.style.display = canDelete ? "inline-block" : "none";
  });

  // MARK COMPLETE OR NOT FOR WORKER AND ADMIN
  document.querySelectorAll(".task-item input[type='checkbox']").forEach(cb => {
    cb.disabled = !canComplete;
  });
}
