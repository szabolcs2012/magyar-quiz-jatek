```js
// =========================
// EMAILJS BEÁLLÍTÁS
// =========================

const EMAILJS_PUBLIC_KEY = "IDE_JON_A_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "IDE_JON_A_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "IDE_JON_A_TEMPLATE_ID";


// =========================
// JÁTÉK VÁLTOZÓK
// =========================

let playerName = "";
let questionCount = 0;
let selectedCategories = [];
let selectedDifficulty = "";

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;


// =========================
// KÉPERNYŐ VÁLTÁS
// =========================

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen) {
        screen.classList.add("hidden");
    });

    const selectedScreen =
        document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.remove("hidden");
    }
}


// =========================
// EMAILJS INDÍTÁSA
// =========================

window.addEventListener("DOMContentLoaded", function () {

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
// KEZDÉS
// =========================

function startGame() {

    const nameInput =
        document.getElementById("player-name");

    const name =
        nameInput.value.trim();

    if (name === "") {

        alert("Kérlek, írd be a neved!");

        nameInput.focus();

        return;
    }

    playerName = name;

    localStorage.setItem(
        "quizPlayerName",
        playerName
    );

    // KEZDÉS UTÁN → KÉRDÉSSZÁM
    showScreen("question-count-screen");
}


// =========================
// KÉRDÉSSZÁM KIVÁLASZTÁSA
// =========================

function selectQuestionCount(count) {

    questionCount = count;

    // Új játékhoz töröljük a korábbi kategóriákat
    selectedCategories = [];

    // KATEGÓRIA KÉPERN
```
