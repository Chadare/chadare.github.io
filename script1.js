// ===== CAESAR CIPHER =====
const SHIFT = 3;

// Encrypt
function caesarEncrypt(text) {
    let result = "";

    for (let char of text) {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 97 ? 97 : 65;
            result += String.fromCharCode(
                ((code - base + SHIFT) % 26) + base
            );
        } else {
            result += char;
        }
    }
    return result;
}

// Decrypt
function caesarDecrypt(text) {
    let result = "";

    for (let char of text) {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 97 ? 97 : 65;
            result += String.fromCharCode(
                ((code - base - SHIFT + 26) % 26) + base
            );
        } else {
            result += char;
        }
    }
    return result;
}

// Example "database"
const encryptedPassword = caesarEncrypt("admin123");
console.log("Encrypted password:", encryptedPassword);
