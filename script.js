let playerName = "";
let questionCount = 0;
let selectedCategories = [];

// Játékos nevének mentése
function startGame() {
    const nameInput = document.getElementById("player-name");

    playerName = nameInput.value.trim();

    if (playerName === "") {
        alert("Kérlek, írd be a neved!");
        return;
    }

    document.getElementById("start-screen").classList.add("hidden");

    document
        .getElementById("question-count-screen")
        .classList.remove("hidden");

    document.getElementById("welcome-text").textContent =
        "Szia, " + playerName + "! Válaszd ki a kérdések számát.";
}


// Kérdések számának kiválasztása
function selectQuestionCount(count) {
    questionCount = count;

    document
        .getElementById("question-count-screen")
        .classList.add("hidden");

    document
        .getElementById("category-screen")
        .classList.remove("hidden");
}


// Kategória kiválasztása
function toggleCategory(button, category) {

    if (selectedCategories.includes(category)) {

        selectedCategories =
            selectedCategories.filter(item => item !== category);

        button.classList.remove("selected");

    } else {

        selectedCategories.push(category);

        button.classList.add("selected");
    }
}


// Kvíz indítása
function startQuiz() {

    if (selectedCategories.length === 0) {
        alert("Kérlek, válassz legalább egy kategóriát!");
        return;
    }

    alert(
        "Kezdődik a kvíz!\n\n" +
        "Játékos: " + playerName + "\n" +
        "Kérdések: " + questionCount + "\n" +
        "Kategóriák: " + selectedCategories.join(", ")
    );
}
