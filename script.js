/* =========================
   OUTILS DE "SÉCURITÉ"
========================= */

// Hash très simplifié (⚠️ pédagogique)
function fakeHash(str) {
    return btoa(str).split("").reverse().join("");
}

// Chiffrement César
function caesarEncrypt(str, shift = 3) {
    return str.split("").map(c =>
        String.fromCharCode(c.charCodeAt(0) + shift)
    ).join("");
}

/* =========================
   BASE D’UTILISATEURS
========================= */

const users = [
    {
        username: "admin",
        password: fakeHash("admin123"),
        type: "hash"
    },
    {
        username: "user1",
        password: caesarEncrypt("user123"),
        type: "caesar"
    },
    {
        username: "user2",
        password: "password",
        type: "plain"
    }
];

/* =========================
   LOGIN
========================= */

const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const u = document.getElementById("username").value;
        const p = document.getElementById("password").value;

        const user = users.find(us => us.username === u);

        if (!user) {
            show("Utilisateur inconnu");
            return;
        }

        let ok = false;

        if (user.type === "plain") {
            ok = p === user.password;
        }

        if (user.type === "caesar") {
            ok = caesarEncrypt(p) === user.password;
        }

        if (user.type === "hash") {
            ok = fakeHash(p) === user.password;
        }

        if (ok) {
            localStorage.setItem("logged", "true");
            window.location.href = "admin.html";
        } else {
            show("Mot de passe incorrect");
        }
    });
}

/* =========================
   PROTECTION FAIBLE
========================= */

if (location.pathname.includes("admin.html")) {
    if (localStorage.getItem("logged") !== "true") {
        location.href = "index.html";
    }
}

/* =========================
   HACK
========================= */

function hack() {
    document.body.classList.add("hacked");

    document.getElementById("content").innerHTML = `
        <h2>💀 YOU’VE BEEN HACKED 💀</h2>
        <img src="logo.png" alt="Hacked logo" width="300">
        <p>Le site a été modifié depuis le navigateur.</p>
        <p><strong>Rappel :</strong> le client n’est pas fiable.</p>
    `;
}


/* ========================= */

function show(msg) {
    document.getElementById("message").textContent = msg;
}

