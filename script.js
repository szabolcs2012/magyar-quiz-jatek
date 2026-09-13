```js
// =========================
// NÉV MEGADÁSA + HELYI MENTÉS
// =========================

// Korábban mentett játékosok
let leaderboard =
    JSON.parse(localStorage.getItem("quizLeaderboard")) || [];

// Korábban mentett név
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
});


// =========================
// KEZDÉS
// =========================

function startGame() {

    const nameInput =
        document.getElementById("player-name");

    playerName =
        nameInput.value.trim();

    if (playerName === "") {

        alert("Kérlek, írd be a neved!");

        return;
    }

    // Név megjegyzése
    localStorage.setItem(
        "quizPlayerName",
        playerName
    );

    // Új játék előtt kategóriák törlése
    selectedCategories = [];

    document
        .querySelectorAll(".categories button")
        .forEach(function (button) {
            button.classList.remove("selected");
        });

    document
        .getElementById("start-screen")
        .classList.add("hidden");

    document
        .getElementById("question-count-screen")
        .classList.remove("hidden");

    document.getElementById("welcome-text").textContent =
        "Szia, " +
        playerName +
        "! Válaszd ki a kérdések számát.";
}


// =========================
// KÉRDÉSEK SZÁMA
// =========================

function selectQuestionCount(count) {

    questionCount = count;

    document
        .getElementById("question-count-screen")
        .classList.add("hidden");

    document
        .getElementById("category-screen")
        .classList.remove("hidden");
}


// =========================
// KATEGÓRIA
// =========================

function toggleCategory(button, category) {

    if (selectedCategories.includes(category)) {

        selectedCategories =
            selectedCategories.filter(function (item) {
                return item !== category;
            });

        button.classList.remove("selected");

    } else {

        selectedCategories.push(category);

        button.classList.add("selected");
    }
}


// =========================
// KATEGÓRIA → NEHÉZSÉG
// =========================

function startQuiz() {

    if (selectedCategories.length === 0) {

        alert(
            "Kérlek, válassz legalább egy kategóriát!"
        );

        return;
    }

    document
        .getElementById("category-screen")
        .classList.add("hidden");

    document
        .getElementById("difficulty-screen")
        .classList.remove("hidden");
}


// =========================
// NEHÉZSÉG → KVÍZ
// =========================

function selectDifficulty(difficulty) {

    selectedDifficulty = difficulty;

    const availableQuestions =
        questions.filter(function (question) {

            return (
                selectedCategories.includes(
                    question.category
                ) &&
                question.difficulty ===
                    selectedDifficulty
            );

        });

    if (availableQuestions.length === 0) {

        alert(
            "Ehhez a kategóriához és nehézséghez még nincs kérdés!"
        );

        return;
    }

    if (availableQuestions.length < questionCount) {

        questionCount =
            availableQuestions.length;

        alert(
            "A kiválasztott beállításokhoz csak " +
            availableQuestions.length +
            " kérdés áll rendelkezésre. " +
            "Ennyivel indul a kvíz."
        );
    }

    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    window.gameQuestions =
        [...availableQuestions]
            .sort(function () {
                return Math.random() - 0.5;
            })
            .slice(0, questionCount);

    document
        .getElementById("difficulty-screen")
        .classList.add("hidden");

    document
        .getElementByI
```
