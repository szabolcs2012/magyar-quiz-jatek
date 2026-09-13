let playerName = "";
let questionCount = 0;
let selectedCategories = [];
let selectedDifficulty = "";

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;


// =========================
// KÉRDÉSEK
// =========================

const questions = [

    // INFORMATIKA
    {
        {
    category: "informatika",
    difficulty: "konnyu",
    question: "Mit jelent a CPU rövidítés?",
        answers: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Control Processing User"
        ],
        correct: 0
    },

    {
       {
    category: "informatika",
    difficulty: "konnyu",
    question: "Melyik eszköz használható adatok tárolására?",
        answers: [
            "SSD",
            "Monitor",
            "Billentyűzet",
            "Egér"
        ],
        correct: 0
    },

    // FÖLDRAJZ
    {
        {
    category: "foldrajz",
    difficulty: "konnyu",
    question: "Mi Magyarország fővárosa?",
        answers: [
            "Debrecen",
            "Szeged",
            "Budapest",
            "Pécs"
        ],
        correct: 2
    },

    {
        {
    category: "foldrajz",
    difficulty: "konnyu",
    question: "Melyik a Föld legnagyobb óceánja?",
        answers: [
            "Atlanti-óceán",
            "Csendes-óceán",
            "Indiai-óceán",
            "Jeges-tenger"
        ],
        correct: 1
    },

    // TÖRTÉNELEM
    {
        category: "tortenelem",
        question: "Mikor volt a mohácsi csata?",
        answers: [
            "1456",
            "1526",
            "1848",
            "1956"
        ],
        correct: 1
    },

    {
        category: "tortenelem",
        question: "Ki volt Magyarország első királya?",
        answers: [
            "Mátyás király",
            "IV. Béla",
            "Szent István",
            "Könyves Kálmán"
        ],
        correct: 2
    },

    // BIOLÓGIA
    {
        category: "biologia",
        question: "Melyik szerv pumpálja a vért?",
        answers: [
            "Tüdő",
            "Szív",
            "Máj",
            "Vese"
        ],
        correct: 1
    },

    {
        category: "biologia",
        question: "Hány lába van egy póknak?",
        answers: [
            "6",
            "8",
            "10",
            "12"
        ],
        correct: 1
    }

];


// =========================
// NÉV MEGADÁSA
// =========================

function startGame() {

    const nameInput = document.getElementById("player-name");

    playerName = nameInput.value.trim();

    if (playerName === "") {
        alert("Kérlek, írd be a neved!");
        return;
    }

    document
        .getElementById("start-screen")
        .classList.add("hidden");

    document
        .getElementById("question-count-screen")
        .classList.remove("hidden");

    document.getElementById("welcome-text").textContent =
        "Szia, " + playerName + "! Válaszd ki a kérdések számát.";
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
            selectedCategories.filter(item => item !== category);

        button.classList.remove("selected");

    } else {

        selectedCategories.push(category);

        button.classList.add("selected");
    }
}


// =========================
// KVÍZ INDÍTÁSA
// =========================

function startQuiz() {
function selectDifficulty(difficulty) {

    selectedDifficulty = difficulty;

    // Csak a kiválasztott kategória ÉS nehézség kérdései
    const availableQuestions = questions.filter(question =>
        selectedCategories.includes(question.category) &&
        question.difficulty === selectedDifficulty
    );

    if (availableQuestions.length === 0) {

        alert("Ehhez a kategóriához és nehézséghez még nincs kérdés!");

        return;
    }

    questionCount = Math.min(
        questionCount,
        availableQuestions.length
    );

    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    window.gameQuestions = availableQuestions
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
    if (selectedCategories.length === 0) {

        alert("Kérlek, válassz legalább egy kategóriát!");

        return;
    }

    // Kategória kiválasztva → megyünk a nehézséghez
    document
        .getElementById("category-screen")
        .classList.add("hidden");

    document
        .getElementById("difficulty-screen")
        .classList.remove("hidden");
}

    // Csak a kiválasztott kategóriák kérdései
    const availableQuestions = questions.filter(question =>
        selectedCategories.includes(question.category)
    );

    if (availableQuestions.length === 0) {

        alert("Ehhez a kategóriához még nincs kérdés!");

        return;
    }

    // Ha például 30 kérdést választott,
    // de csak 8 tesztkérdésünk van,
    // most a rendelkezésre álló kérdéseket használjuk.
    questionCount = Math.min(
        questionCount,
        availableQuestions.length
    );

    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    // A kérdéseket eltesszük a játékhoz
    window.gameQuestions = availableQuestions
        .sort(() => Math.random() - 0.5)
        .slice(0, questionCount);

    document
        .getElementById("category-screen")
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

    const question = window.gameQuestions[currentQuestionIndex];

    document.getElementById("question-number").textContent =
        (currentQuestionIndex + 1) + " / " + questionCount;

    document.getElementById("question-text").textContent =
        question.question;

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.onclick = function () {
            checkAnswer(index);
        };

        answersContainer.appendChild(button);
    });

    updateScore();
}


// =========================
// VÁLASZ ELLENŐRZÉSE
// =========================

function checkAnswer(selectedAnswer) {

    const question = window.gameQuestions[currentQuestionIndex];

    const buttons =
        document.querySelectorAll("#answers button");

    // Ne lehessen többször kattintani
    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedAnswer === question.correct) {

        correctAnswers++;

        buttons[selectedAnswer].classList.add("correct");

    } else {

        wrongAnswers++;

        buttons[selectedAnswer].classList.add("wrong");

        buttons[question.correct].classList.add("correct");
    }

    updateScore();

    setTimeout(() => {

        currentQuestionIndex++;

        if (currentQuestionIndex < questionCount) {

            showQuestion();

        } else {

            finishQuiz();
        }

    }, 1000);
}


// =========================
// PONTSZÁM
// =========================

function updateScore() {

    document.getElementById("score").textContent =
        "✅ Helyes: " + correctAnswers +
        " | ❌ Helytelen: " + wrongAnswers;
}


// =========================
// KVÍZ VÉGE
// =========================

function finishQuiz() {

    alert(
        "🎉 Kvíz vége!\n\n" +
        "Játékos: " + playerName + "\n" +
        "Helyes válaszok: " + correctAnswers + "\n" +
        "Helytelen válaszok: " + wrongAnswers
    );
}
