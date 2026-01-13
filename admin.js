// ===== ACCESS CONTROL =====
if (localStorage.getItem("isAdmin") !== "true") {
    window.location.replace("index.html");
}

// ===== DISPLAY DATA =====
document.getElementById("secret").textContent =
    caesarEncrypt("admin123");

// ===== LOGOUT =====
function logout() {
    localStorage.removeItem("isAdmin");
    window.location.replace("index.html");
}
