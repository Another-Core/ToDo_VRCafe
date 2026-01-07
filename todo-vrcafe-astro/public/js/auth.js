let currentUser = null;

function login(username) {
  const user = users.find(u => u.username === username);
  if (!user) {
    alert("User not found");
    return;
  }

  currentUser = user;
  applyPermissions();

  // REMOVE ACTIVE STATE FROM ROLE BUTTONS (EXCEPT NEON TOGGLE)
  document.querySelectorAll(".role-switch button:not(.neon-toggle)").forEach(b => b.classList.remove("active"));

  if (user.role === "admin") {
    document.querySelector(".role-switch button.admin")?.classList.add("active");
  } else if (user.role === "worker") {
    document.querySelector(".role-switch button.worker")?.classList.add("active");
  } else {
    document.querySelector(".role-switch button.guest")?.classList.add("active");
  }
  syncNeonButton();
  updateUI();

}

function logout() {
  currentUser = null;
  applyPermissions();
  syncNeonButton();
  updateUI();
}

function isAdmin() {
  return currentUser?.role === "admin";
}

function isWorker() {
  return currentUser?.role === "worker";
}

function isGuest() {
  return !currentUser || currentUser.role === "guest";
}

// SYNCHRONIZE NEON TOGGLE BUTTON WITH CURRENT NEON STATE
function syncNeonButton() {
  const btn = document.querySelector(".neon-toggle");
  if (!btn) return;

  const neonOn = document.body.classList.contains("neon");
  btn.classList.toggle("active", neonOn);
}
