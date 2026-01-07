let draggedTaskId = null;

// INITIALIZE DRAG & DROP
function initDragAndDrop() {
    // DRAG -> ONLY BY HANDLE
    document.querySelectorAll(".drag-handle").forEach(handle => {
        handle.addEventListener("dragstart", (e) => {
            const item = e.target.closest(".task-item");
            if (!item) return;

            draggedTaskId = Number(item.dataset.id);
        });
    });

    document.querySelectorAll(".task-list").forEach(list => {

        // SHOW BORDER
        list.addEventListener("dragover", (e) => {
            e.preventDefault();
            list.classList.add("drag-over");
        });

        // HIDE BORDER
        list.addEventListener("dragleave", () => {
            list.classList.remove("drag-over");
        });

        // DROP
        list.addEventListener("drop", (e) => {
            e.preventDefault();
            list.classList.remove("drag-over");

            // ONLY ADMIN
            if (!isAdmin()) return;

            // NO CATEGORY - CANCEL DROP
            const newCategory = list.dataset.category;
            if (!newCategory) return;

            // NO TASK - CANCEL DROP
            const task = tasks.find(t => t.id === draggedTaskId);
            if (!task) return;

            // UPDATE CATEGORY
            task.category = newCategory;

            saveTasks(tasks);
            updateUI();
        });
    });
}
