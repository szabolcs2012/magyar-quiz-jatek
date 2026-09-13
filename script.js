let playerName = "";
let questionCount = 0;

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

function selectQuestionCount(count) {
    questionCount = count;

    alert(
        playerName +
        ", kiválasztottad a " +
        questionCount +
        " kérdést!"
    );
}

