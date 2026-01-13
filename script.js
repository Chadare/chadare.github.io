// Fake database
const USERS = [
    { username: "admin", password: "1234" }
];

// LOGIN LOGIC
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const u = username.value;
    const p = password.value;

    const found = USERS.find(user => user.username === u && user.password === p);

    if (found) {
        localStorage.setItem("isAdmin", "true");
        window.location.href = "admin.html";
    } else {
        message.textContent = "Wrong credentials";
    }
});

// ADMIN PAGE PROTECTION
if (location.pathname.includes("admin.html")) {
    if (localStorage.getItem("isAdmin") === "true") {
        document.getElementById("content").style.display = "block";
        document.getElementById("warning").style.display = "none";
    } else {
        setTimeout(() => {
            location.href = "index.html";
        }, 500);
    }
}

// LOGOUT
document.getElementById("logout")?.addEventListener("click", () => {
    localStorage.removeItem("isAdmin");
    location.href = "index.html";
});
