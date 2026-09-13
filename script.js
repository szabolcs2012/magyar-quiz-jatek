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

let quizQuestions = [];


// =========================
// KÉPERNYŐ VÁLTÁS
// =========================

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen) {
        screen.classList.add("hidden");
    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.remove("hidden");
    }
}


// =========================
// EMAILJS INDÍTÁSA
// =========================

window.addEventListener("DOMContentLoaded", function () {

    const savedName = localStorage.getItem("quizPlayerName");

    if (savedName) {

        playerName = savedName;

        const nameInput = document.getElementById("player-name");

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

    // Biztosan csak a kezdőképernyő jelenjen meg induláskor
    showScreen("start-screen");
});


// =========================
// KEZDÉS
// =========================

function startGame() {

    const nameInput = document.getElementById("player-name");

    if (!nameInput) {
        return;
    }

    const name = nameInput.value.trim();

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

    // KEZDÉS → KÉRDÉSSZÁM
    showScreen("question-count-screen");
}


// =========================
// KÉRDÉSSZÁM KIVÁLASZTÁSA
// =========================

function selectQuestionCount(count) {

    questionCount = count;

    // Új játékhoz töröljük a korábbi választásokat
    selectedCategories = [];
    selectedDifficulty = "";

    // KATEGÓRIA
    showScreen("category-screen");
}


// =========================
// KATEGÓRIA KIVÁLASZTÁSA
// =========================

function toggleCategory(category) {

    const index = selectedCategories.indexOf(category);

    if (index === -1) {

        selectedCategories.push(category);

    } else {

        selectedCategories.splice(index, 1);
    }

    // Gombok színének frissítése
    const buttons = document.querySelectorAll(
        "#category-buttons button"
    );

    buttons.forEach(function (button) {

        button.classList.remove("selected");

        const onclickText = button.getAttribute("onclick");

        if (
            onclickText &&
            onclickText.includes("'" + category + "'") &&
            selectedCategories.includes(category)
        ) {
            button.classList.add("selected");
        }
    });

    // Biztosabb megoldás: minden kategóriagomb állapotának frissítése
    buttons.forEach(function (button) {

        const onclickText = button.getAttribute("onclick");

        if (!onclickText) {
            return;
        }

        selectedCategories.forEach(function (selectedCategory) {

            if (
                onclickText.includes(
                    "'" + selectedCategory + "'"
                )
            ) {
                button.classList.add("selected");
            }

        });

    });
}


// =========================
// KATEGÓRIA → NEHÉZSÉG
// =========================

function startQuiz() {

    if (selectedCategories.length === 0) {

        alert("Kérlek, válassz legalább egy kategóriát!");

        return;
    }

    // KATEGÓRIA → NEHÉZSÉG
    showScreen("difficulty-screen");
}


// =========================
// NEHÉZSÉG KIVÁLASZTÁSA
// =========================

function selectDifficulty(difficulty) {

    selectedDifficulty = difficulty;

    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    // A questions tömbből kiválogatjuk
    // a kiválasztott kategóriát és nehézséget
    if (typeof questions === "undefined") {

        alert(
            "Hiba: a questions tömb nem található a script.js fájlban!"
        );

        return;
    }

    quizQuestions = questions.filter(function (question) {

        return (
            selectedCategories.includes(question.category) &&
            question.difficulty === selectedDifficulty
        );

    });

    // Ha nincs elég kérdés
    if (quizQuestions.length === 0) {

        alert(
            "Nincs kérdés ehhez a kategória + nehézség kombinációhoz."
        );

        return;
    }

    // Véletlenszerű sorrend
    quizQuestions.sort(function () {
        return Math.random() - 0.5;
    });

    // A kiválasztott kérdésszámot használjuk,
    // de nem lépjük túl a rendelkezésre álló kérdéseket.
    quizQuestions = quizQuestions.slice(
        0,
        questionCount
    );

    // KVÍZ
    showScreen("quiz-screen");

    showQuestion();
}


// =========================
// KÉRDÉS MEGJELENÍTÉSE
// =========================

function showQuestion() {

    if (currentQuestionIndex >= quizQuestions.length) {

        finishQuiz();

        return;
    }

    const currentQuestion =
        quizQuestions[currentQuestionIndex];

    const questionNumber =
        document.getElementById("question-number");

    const questionText =
        document.getElementById("question");

    const answersContainer =
        document.getElementById("answers");

    const score =
        document.getElementById("score");

    if (questionNumber) {

        questionNumber.textContent =
            "Kérdés " +
            (currentQuestionIndex + 1) +
            " / " +
            quizQuestions.length;
    }

    if (questionText) {

        questionText.textContent =
            currentQuestion.question;
    }

    if (score) {

        score.textContent =
            "Pontszám: " +
            correctAnswers +
            " / " +
            (currentQuestionIndex);
    }

    if (!answersContainer) {
        return;
    }

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(function (answer, index) {

        const button =
            document.createElement("button");

        button.textContent = answer;

        button.onclick = function () {
            checkAnswer(index, button);
        };

        answersContainer.appendChild(button);

    });
}


// =========================
// VÁLASZ ELLENŐRZÉSE
// =========================

function checkAnswer(answerIndex, clickedButton) {

    const currentQuestion =
        quizQuestions[currentQuestionIndex];

    const buttons =
        document.querySelectorAll("#answers button");

    // Ne lehessen többször válaszolni
    buttons.forEach(function (button) {
        button.disabled = true;
    });

    if (answerIndex === currentQuestion.correct) {

        correctAnswers++;

        clickedButton.classList.add("correct");
        clickedButton.classList.add("flash");

    } else {

        wrongAnswers++;

        clickedButton.classList.add("wrong");

        // Helyes válasz megmutatása
        buttons.forEach(function (button, index) {

            if (index === currentQuestion.correct) {

                button.classList.add("correct");
                button.classList.add("flash");

            }

        });
    }

    const score =
        document.getElementById("score");

    if (score) {

        score.textContent =
            "Pontszám: " +
            correctAnswers +
            " / " +
            (currentQuestionIndex + 1);
    }

    // Kis várakozás után következő kérdés
    setTimeout(function () {

        currentQuestionIndex++;

        showQuestion();

    }, 1600);
}


// =========================
// KVÍZ VÉGE
// =========================

function finishQuiz() {

    const total =
        quizQuestions.length;

    const percentage =
        total > 0
            ? Math.round(
                (correctAnswers / total) * 100
            )
            : 0;

    saveLeaderboard(
        playerName,
        correctAnswers,
        total
    );

    alert(
        "🎉 Vége a kvíznek!\n\n" +
        "Helyes válaszok: " +
        correctAnswers +
        "\nHibás válaszok: " +
        wrongAnswers +
        "\nEredmény: " +
        percentage +
        "%"
    );

    showLeaderboard();
}


// =========================
// LEADERBOARD MENTÉSE
// =========================

function saveLeaderboard(name, score, total) {

    let leaderboard =
        JSON.parse(
            localStorage.getItem("quizLeaderboard") || "[]"
        );

    leaderboard.push({
        name: name,
        score: score,
        total: total,
        date: new Date().toLocaleString("hu-HU")
    });

    leaderboard.sort(function (a, b) {

        return b.score - a.score;

    });

    leaderboard =
        leaderboard.slice(0, 10);

    localStorage.setItem(
        "quizLeaderboard",
        JSON.stringify(leaderboard)
    );
}


// =========================
// LEADERBOARD MEGJELENÍTÉSE
// =========================

function showLeaderboard() {

    const list =
        document.getElementById("leaderboard-list");

    if (!list) {
        return;
    }

    const leaderboard =
        JSON.parse(
            localStorage.getItem("quizLeaderboard") || "[]"
        );

    list.innerHTML = "";

    if (leaderboard.length === 0) {

        list.innerHTML =
            "<p>Még nincs eredmény.</p>";

    } else {

        leaderboard.forEach(function (entry, index) {

            const row =
                document.createElement("p");

            row.textContent =
                (index + 1) +
                ". " +
                entry.name +
                " — " +
                entry.score +
                " / " +
                entry.total;

            list.appendChild(row);

        });

    }

    showScreen("leaderboard-screen");
}


// =========================
// LEVÉL BEZÁRÁSA
// =========================

function closeLetter() {

    const overlay =
        document.getElementById("letter-overlay");

    if (overlay) {

        overlay.classList.add("hidden");
    }
}


// =========================
// MEGJEGYZÉS KÜLDÉSE
// =========================

async function saveComment() {

    const commentBox =
        document.getElementById("player-comment");

    if (!commentBox) {
        return;
    }

    const comment =
        commentBox.value.trim();

    if (comment === "") {

        alert(
            "Kérlek, írj be egy megjegyzést!"
        );

        return;
    }

    // Ha az EmailJS még nincs beállítva
    if (
        EMAILJS_PUBLIC_KEY === "IDE_JON_A_PUBLIC_KEY" ||
        EMAILJS_SERVICE_ID === "IDE_JON_A_SERVICE_ID" ||
        EMAILJS_TEMPLATE_ID === "IDE_JON_A_TEMPLATE_ID"
    ) {

        alert(
            "Az EmailJS még nincs beállítva."
        );

        return;
    }

    try {

        await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                player_name: playerName,
                message: comment
            }
        );

        alert(
            "✅ Köszönöm a megjegyzést!"
        );

        commentBox.value = "";

    } catch (error) {

        console.error(error);

        alert(
            "❌ Nem sikerült elküldeni a megjegyzést."
        );
    }
}
```
