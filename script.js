```js
// =========================
// EMAILJS BEÁLLÍTÁS
// =========================

// IDE fogjuk beírni az EmailJS adataidat
const EMAILJS_PUBLIC_KEY = "IDE_JON_A_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "IDE_JON_A_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "IDE_JON_A_TEMPLATE_ID";


// =========================
// EMAILJS INDÍTÁSA
// =========================

window.addEventListener("DOMContentLoaded", function () {

    // Név betöltése
    const savedName =
        localStorage.getItem("quizPlayerName");

    if (savedName) {

        playerName = savedName;

        const nameInput =
            document.getElementById("player-name");

        if (nameInput) {
            nameInput.value = savedName;
        }
    }

    // EmailJS indítása
    if (
        typeof emailjs !== "undefined" &&
        EMAILJS_PUBLIC_KEY !== "IDE_JON_A_PUBLIC_KEY"
    ) {
        emailjs.init({
            publicKey: EMAILJS_PUBLIC_KEY
        });
    }
});


// =========================
// MEGJEGYZÉS MENTÉSE + E-MAIL
// =========================

async function saveComment() {

    const commentBox =
        document.getElementById("player-comment");

    const comment =
        commentBox.value.trim();

    if (comment === "") {

        alert("Kérlek, írj be egy megjegyzést!");

        return;
    }

    // Helyi mentés
    const comment
```
