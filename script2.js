// ===== SHA-256 HASH =====
async function hash(text) {
    const data = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

// ===== WITHOUT SALT (BAD) =====
async function loginWithoutSalt(inputPassword) {
    const storedHash = await hash("admin123");

    const inputHash = await hash(inputPassword);

    return storedHash === inputHash;
}

// ===== WITH SALT (BETTER) =====
const SALT = "X7!kP";

async function loginWithSalt(inputPassword) {
    const storedHash = await hash("admin123" + SALT);

    const inputHash = await hash(inputPassword + SALT);

    return storedHash === inputHash;
}
