
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

    const selectedScreen =
        document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.remove("hidden");
    }
}


// =========================
// OLDAL BETÖLTÉSE
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

    // Csak a kezdőképernyő jelenjen meg
    showScreen("start-screen");
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

    // KEZDÉS → KÉRDÉSSZÁM
    showScreen("question-count-screen");
}


// =========================
// KÉRDÉSSZÁM KIVÁLASZTÁSA
// =========================

function selectQuestionCount(count) {

    questionCount = Number(count);

    // Új játék
    selectedCategories = [];
    selectedDifficulty = "";

    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    quizQuestions = [];

    // KÉRDÉSSZÁM → KATEGÓRIA
    showScreen("category-screen");
}


// =========================
// KATEGÓRIA KIVÁLASZTÁSA
// =========================

function toggleCategory(category) {

    const index =
        selectedCategories.indexOf(category);

    if (index === -1) {

        selectedCategories.push(category);

    } else {

        selectedCategories.splice(index, 1);
    }

    // Gombok színezése
    const buttons =
        document.querySelectorAll("#category-buttons button");

    buttons.forEach(function (button) {

        const onclickText =
            button.getAttribute("onclick") || "";

        const match =
            onclickText.match(/'([^']+)'/);

        const buttonCategory =
            match ? match[1] : "";

        if (
            selectedCategories.includes(buttonCategory)
        ) {
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }
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

    showScreen("difficulty-screen");
}


// =========================
// NEHÉZSÉG KIVÁLASZTÁSA
// =========================

function selectDifficulty(difficulty) {

    selectedDifficulty = difficulty;

    // Ellenőrizzük, hogy léteznek-e kérdések
    if (
        typeof questions === "undefined" ||
        !Array.isArray(questions)
    ) {

        alert(
            "Hiba: a kérdések nem találhatók a script.js fájlban!"
        );

        return;
    }

    // Kérdések szűrése
    quizQuestions = questions.filter(function (question) {

        return (
            selectedCategories.includes(question.category) &&
            question.difficulty === selectedDifficulty
        );
    });

    // Ha nincs elég kérdés
    if (quizQuestions.length === 0) {

        alert(
            "Ebben a kategóriában nincs ilyen nehézségű kérdés."
        );

        return;
    }

    // Véletlenszerű sorrend
    quizQuestions.sort(function () {
        return Math.random() - 0.5;
    });

    // A kiválasztott mennyiség
    quizQuestions =
        quizQuestions.slice(0, questionCount);

    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    // Ha kevesebb kérdés van, jelezzük
    if (quizQuestions.length < questionCount) {

        alert(
            "Ehhez a választáshoz csak " +
            quizQuestions.length +
            " kérdés áll rendelkezésre."
        );
    }

    // Kvíz indítása
    showScreen("quiz-screen");

    showQuestion();
}


// =========================
// KÉRDÉS MEGJELENÍTÉSE
// =========================

function showQuestion() {

    if (
        currentQuestionIndex >= quizQuestions.length
    ) {
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

    const scoreElement =
        document.getElementById("score");

    questionNumber.textContent =
        "Kérdés " +
        (currentQuestionIndex + 1) +
        " / " +
        quizQuestions.length;

    questionText.textContent =
        currentQuestion.question;

    scoreElement.textContent =
        "Pontszám: " +
        correctAnswers;

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(
        function (answer, index) {

            const button =
                document.createElement("button");

            button.textContent = answer;

            button.addEventListener(
                "click",
                function () {
                    checkAnswer(index, button);
                }
            );

            answersContainer.appendChild(button);
        }
    );
}


// =========================
// VÁLASZ ELLENŐRZÉSE
// =========================

function checkAnswer(selectedAnswer, clickedButton) {

    const currentQuestion =
        quizQuestions[currentQuestionIndex];

    const answerButtons =
        document.querySelectorAll("#answers button");

    // Ne lehessen többször kattintani
    answerButtons.forEach(function (button) {
        button.disabled = true;
    });

    if (selectedAnswer === currentQuestion.correct) {

        // HELYES
        clickedButton.classList.add("correct");
        clickedButton.classList.add("flash");

        correctAnswers++;

    } else {

        // HIBÁS
        clickedButton.classList.add("wrong");

        wrongAnswers++;

        // A helyes válasz zöld legyen
        answerButtons.forEach(function (button, index) {

            if (index === currentQuestion.correct) {

                button.classList.add("correct");
                button.classList.add("flash");
            }
        });
    }

    // Következő kérdés
    setTimeout(function () {

        currentQuestionIndex++;

        showQuestion();

    }, 1500);
}


// =========================
// KVÍZ VÉGE
// =========================

function finishQuiz() {

    saveLeaderboard();

    const total =
        quizQuestions.length;

    const percentage =
        total > 0
            ? Math.round((correctAnswers / total) * 100)
            : 0;

    alert(
        "🎉 Kvíz vége!\n\n" +
        "Játékos: " + playerName + "\n" +
        "Helyes válaszok: " + correctAnswers + "\n" +
        "Hibás válaszok: " + wrongAnswers + "\n" +
        "Eredmény: " + percentage + "%"
    );

    // Levél megnyitása
    const letterOverlay =
        document.getElementById("letter-overlay");

    if (letterOverlay) {

        letterOverlay.classList.remove("hidden");

        setTimeout(function () {
            letterOverlay.classList.add("animate");
        }, 100);
    }
}


// =========================
// LEADERBOARD MENTÉSE
// =========================

function saveLeaderboard() {

    const leaderboard =
        JSON.parse(
            localStorage.getItem("quizLeaderboard") || "[]"
        );

    leaderboard.push({

        name: playerName,

        score: correctAnswers,

        total: quizQuestions.length,

        date: new Date().toLocaleString("hu-HU")
    });

    // Legjobb eredmények elöl
    leaderboard.sort(function (a, b) {
        return b.score - a.score;
    });

    // Csak a legjobb 20 maradjon
    const topResults =
        leaderboard.slice(0, 20);

    localStorage.setItem(
        "quizLeaderboard",
        JSON.stringify(topResults)
    );
}


// =========================
// LEADERBOARD MEGJELENÍTÉSE
// =========================

function showLeaderboard() {

    const list =
        document.getElementById("leaderboard-list");

    list.innerHTML = "";

    const leaderboard =
        JSON.parse(
            localStorage.getItem("quizLeaderboard") || "[]"
        );

    if (leaderboard.length === 0) {

        list.innerHTML =
            "<p>Még nincs eredmény.</p>";

        showScreen("leaderboard-screen");

        return;
    }

    leaderboard.forEach(function (item, index) {

        const entry =
            document.createElement("div");

        entry.innerHTML =
            "<strong>" +
            (index + 1) +
            ". " +
            item.name +
            "</strong><br>" +
            "🏆 " +
            item.score +
            " / " +
            item.total +
            "<br>" +
            "<small>" +
            item.date +
            "</small>";

        list.appendChild(entry);
    });

    showScreen("leaderboard-screen");
}


// =========================
// LEVÉL BEZÁRÁSA
// =========================

function closeLetter() {

    const letterOverlay =
        document.getElementById("letter-overlay");

    if (letterOverlay) {

        letterOverlay.classList.remove("animate");

        setTimeout(function () {

            letterOverlay.classList.add("hidden");

            // Vissza a kezdőképernyőre
            showScreen("start-screen");

        }, 300);
    }
}


// =========================
// MEGJEGYZÉS / EMAILJS
// =========================

function saveComment() {

    const commentElement =
        document.getElementById("player-comment");

    const comment =
        commentElement.value.trim();

    if (comment === "") {

        alert("Kérlek, írj egy megjegyzést!");

        return;
    }

    // EmailJS nincs még beállítva
    if (
        typeof emailjs === "undefined" ||
        EMAILJS_PUBLIC_KEY === "IDE_JON_A_PUBLIC_KEY" ||
        EMAILJS_SERVICE_ID === "IDE_JON_A_SERVICE_ID" ||
        EMAILJS_TEMPLATE_ID === "IDE_JON_A_TEMPLATE_ID"
    ) {

        alert(
            "A megjegyzés elkészült, de az EmailJS még nincs beállítva."
        );

        localStorage.setItem(
            "lastQuizComment",
            comment
        );

        return;
    }

    const templateParams = {

        player_name: playerName,

        message: comment,

        score: correctAnswers,

        total_questions: quizQuestions.length
    };

    emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
    )
    .then(function () {

        alert("✅ A megjegyzés elküldve!");

        commentElement.value = "";

    })
    .catch(function (error) {

        console.error(error);

        alert(
            "❌ Nem sikerült elküldeni a megjegyzést."
        );
    });
}
const questions = [
   // ide jön mind a 120 kérdés
];

questions.forEach(function(question) {
    const correctText = question.answers[question.correct];

    question.answers.sort(function() {
        return Math.random() - 0.5;
    });

    question.correct = question.answers.indexOf(correctText);
});
