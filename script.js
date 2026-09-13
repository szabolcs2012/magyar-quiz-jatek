//
// NÉV MEGADÁSA + HELYI MENTÉS
//

// A korábban mentett játékosok betöltése
let leaderboard =
    JSON.parse(localStorage.getItem("quizLeaderboard")) || [];

// A korábban mentett név betöltése
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

    // Ha új játékot kezdünk, a korábbi kategóriákat töröljük
    selectedCategories = [];

    document
        .querySelectorAll(".categories button")
        .forEach(button => {
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
            selectedCategories.filter(
                item => item !== category
            );

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
        questions.filter(question =>
            selectedCategories.includes(
                question.category
            ) &&
            question.difficulty ===
                selectedDifficulty
        );

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
            .sort(() => Math.random() - 0.5)
            .slice(0, questionCount);

    document
        .getElementById("difficulty-screen")
        .classList.add("hidden");

    document
        .getElementById("quiz-screen")
        .classList.remove("hidden");

    showQuestion();
}


// =========================
// KÉRDÉS MEGJELENÍTÉSE
// =========================

function showQuestion() {

    const question =
        window.gameQuestions[
            currentQuestionIndex
        ];

    document.getElementById(
        "question-number"
    ).textContent =
        (currentQuestionIndex + 1) +
        " / " +
        questionCount;

    document.getElementById(
        "question-text"
    ).textContent =
        question.question;

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";

    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.textContent = answer;

            button.onclick = function () {

                checkAnswer(index);

            };

            answersContainer.appendChild(
                button
            );
        }
    );

    updateScore();
}


// =========================
// VÁLASZ ELLENŐRZÉSE
// =========================

function checkAnswer(selectedAnswer) {

    const question =
        window.gameQuestions[
            currentQuestionIndex
        ];

    const buttons =
        document.querySelectorAll(
            "#answers button"
        );

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (
        selectedAnswer ===
        question.correct
    ) {

        correctAnswers++;

        buttons[selectedAnswer]
            .classList.add("correct");

    } else {

        wrongAnswers++;

        // Rossz válasz = piros
        buttons[selectedAnswer]
            .classList.add("wrong");

        // Helyes válasz = zöld + villog
        buttons[question.correct]
            .classList.add(
                "correct",
                "flash"
            );
    }

    updateScore();

    setTimeout(function () {

        currentQuestionIndex++;

        if (
            currentQuestionIndex <
            questionCount
        ) {

            showQuestion();

        } else {

            finishQuiz();
        }

    }, 1500);
}


// =========================
// PONTSZÁM
// =========================

function updateScore() {

    document.getElementById(
        "score"
    ).textContent =
        "✅ Helyes: " +
        correctAnswers +
        " | ❌ Helytelen: " +
        wrongAnswers;
}


// =========================
// KVÍZ VÉGE
// =========================

function finishQuiz() {

    // Megnézzük, játszott-e már ez a név
    const existingPlayer =
        leaderboard.find(
            player =>
                player.name.toLowerCase() ===
                playerName.toLowerCase()
        );

    if (existingPlayer) {

        existingPlayer.games++;

        existingPlayer.correct +=
            correctAnswers;

        existingPlayer.wrong +=
            wrongAnswers;

        existingPlayer.points +=
            correctAnswers;

    } else {

        leaderboard.push({

            name: playerName,

            games: 1,

            correct: correctAnswers,

            wrong: wrongAnswers,

            points: correctAnswers

        });
    }

    // Leaderboard mentése
    localStorage.setItem(
        "quizLeaderboard",
        JSON.stringify(leaderboard)
    );

    // Eredmény kiírása
    alert(
        "🎉 Kvíz vége!\n\n" +
        "Játékos: " +
        playerName +
        "\n" +
        "✅ Helyes: " +
        correctAnswers +
        "\n" +
        "❌ Helytelen: " +
        wrongAnswers +
        "\n\n" +
        "🏆 Az eredményed elmentve!"
    );

    // Leaderboard megnyitása
    showLeaderboard();
}


// =========================
// LEADERBOARD
// =========================

function showLeaderboard() {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {
            screen.classList.add("hidden");
        });

    document
        .getElementById(
            "leaderboard-screen"
        )
        .classList.remove("hidden");

    leaderboard =
        JSON.parse(
            localStorage.getItem(
                "quizLeaderboard"
            )
        ) || [];

    const leaderboardList =
        document.getElementById(
            "leaderboard-list"
        );

    leaderboardList.innerHTML = "";

    // Még senki nem játszott
    if (leaderboard.length === 0) {

        leaderboardList.innerHTML =
            "<p>Még senki nem játszott.</p>";

        return;
    }

    // Pontszám szerint csökkenő sorrend
    const sortedLeaderboard =
        [...leaderboard].sort(
            (a, b) =>
                b.points - a.points
        );

    sortedLeaderboard.forEach(
        (player, index) => {

            const playerDiv =
                document.createElement("div");

            playerDiv.classList.add(
                "leaderboard-player"
            );

            let medal = "";

            if (index === 0) {
                medal = "🥇 ";
            } else if (index === 1) {
                medal = "🥈 ";
            } else if (index === 2) {
                medal = "🥉 ";
            }

            const name =
                document.createElement("h2");

            name.textContent =
                medal +
                (index + 1) +
                ". " +
                player.name;

            const games =
                document.createElement("p");

            games.textContent =
                "🎮 Játszott játékok: " +
                player.games;

            const correct =
                document.createElement("p");

            correct.textContent =
                "✅ Helyes válaszok: " +
                player.correct;

            const wrong =
                document.createElement("p");

            wrong.textContent =
                "❌ Helytelen válaszok: " +
                player.wrong;

            const points =
                document.createElement("p");

            points.textContent =
                "🏆 Pontszám: " +
                player.points;

            playerDiv.appendChild(name);
            playerDiv.appendChild(games);
            playerDiv.appendChild(correct);
            playerDiv.appendChild(wrong);
            playerDiv.appendChild(points);

            leaderboardList.appendChild(
                playerDiv
            );
        }
    );
}


// =========================
// VISSZA A KEZDŐKÉPERNYŐRE
// =========================

function backToStart() {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {
            screen.classList.add("hidden");
        });

    document
        .getElementById("start-screen")
        .classList.remove("hidden");

    // Név visszatöltése
    const savedName =
        localStorage.getItem(
            "quizPlayerName"
        );

    if (savedName) {

        playerName = savedName;

        document.getElementById(
            "player-name"
        ).value = savedName;
    }
}
