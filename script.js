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
        {
    category: "informatika",
    difficulty: "konnyu",
    question: "Melyik billentyűvel lehet új sort kezdeni?",
    answers: [
        "Shift",
        "Enter",
        "Ctrl",
        "Alt"
    ],
    correct: 1
},

{
    category: "informatika",
    difficulty: "konnyu",
    question: "Melyik eszközzel mozgatjuk általában a kurzort?",
    answers: [
        "Nyomtató",
        "Monitor",
        "Egér",
        "Hangszóró"
    ],
    correct: 2
},

{
    category: "informatika",
    difficulty: "konnyu",
    question: "Mit jelent a RAM rövidítés?",
    answers: [
        "Random Access Memory",
        "Read Access Machine",
        "Rapid Action Memory",
        "Run Application Mode"
    ],
    correct: 0
},

{
    category: "informatika",
    difficulty: "konnyu",
    question: "Melyik programmal lehet internetes oldalakat megnyitni?",
    answers: [
        "Böngésző",
        "Számológép",
        "Jegyzettömb",
        "Fájlkezelő"
    ],
    correct: 0
},

{
    category: "informatika",
    difficulty: "konnyu",
    question: "Melyik ezek közül operációs rendszer?",
    answers: [
        "Windows",
        "Google",
        "YouTube",
        "Facebook"
    ],
    correct: 0
},

{
    category: "informatika",
    difficulty: "konnyu",
    question: "Melyik eszköz jeleníti meg a képet a számítógépen?",
    answers: [
        "Billentyűzet",
        "Monitor",
        "Egér",
        "Mikrofon"
    ],
    correct: 1
},

{
    category: "informatika",
    difficulty: "konnyu",
    question: "Melyik billentyű töröl egy karaktert a kurzor bal oldaláról?",
    answers: [
        "Enter",
        "Backspace",
        "Tab",
        "Shift"
    ],
    correct: 1
},

{
    category: "informatika",
    difficulty: "konnyu",
    question: "Melyik eszközzel lehet dokumentumot papírra nyomtatni?",
    answers: [
        "Scanner",
        "Router",
        "Nyomtató",
        "Webkamera"
    ],
    correct: 2
},

{
    category: "informatika",
    difficulty: "konnyu",
    question: "Mit jelent a Wi-Fi?",
    answers: [
        "Vezeték nélküli hálózati kapcsolat",
        "Videófájl formátum",
        "Számítógépes játék",
        "Operációs rendszer"
    ],
    correct: 0
},

{
    category: "informatika",
    difficulty: "konnyu",
    question: "Melyik billentyűkombinációval lehet általában másolni?",
    answers: [
        "Ctrl + V",
        "Ctrl + X",
        "Ctrl + C",
        "Ctrl + Z"
    ],
    correct: 2
    {
    category: "informatika",
    difficulty: "kozepes",
    question: "Melyik fájlkiterjesztés tartozik általában egy JavaScript fájlhoz?",
    answers: [
        ".css",
        ".js",
        ".jpg",
        ".html"
    ],
    correct: 1
},

{
    category: "informatika",
    difficulty: "kozepes",
    question: "Mit jelent az URL rövidítés?",
    answers: [
        "Universal Resource Locator",
        "User Remote Link",
        "Universal Read Language",
        "United Resource List"
    ],
    correct: 0
},

{
    category: "informatika",
    difficulty: "kozepes",
    question: "Melyik protokollt használják általában weboldalak biztonságos elérésére?",
    answers: [
        "FTP",
        "HTTP",
        "HTTPS",
        "SMTP"
    ],
    correct: 2
},

{
    category: "informatika",
    difficulty: "kozepes",
    question: "Melyik komponens végzi a számítási műveletek nagy részét?",
    answers: [
        "CPU",
        "Monitor",
        "Billentyűzet",
        "Tápegység"
    ],
    correct: 0
},

{
    category: "informatika",
    difficulty: "kozepes",
    question: "Mire szolgál a DNS?",
    answers: [
        "Webcímeket kapcsol IP-címekhez",
        "Fájlokat tömörít",
        "Képeket szerkeszt",
        "Zenét játszik le"
    ],
    correct: 0
},

{
    category: "informatika",
    difficulty: "kozepes",
    question: "Melyik programozási nyelvet futtatják közvetlenül a böngészők weboldalakon?",
    answers: [
        "JavaScript",
        "C++",
        "Python",
        "Java"
    ],
    correct: 0
},

{
    category: "informatika",
    difficulty: "kozepes",
    question: "Mit jelent a HTML rövidítés?",
    answers: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Home Tool Markup Language",
        "Hyperlink Text Management Language"
    ],
    correct: 0
},

{
    category: "informatika",
    difficulty: "kozepes",
    question: "Melyik memória tárol adatokat ideiglenesen a programok futtatásakor?",
    answers: [
        "SSD",
        "RAM",
        "DVD",
        "USB-kábel"
    ],
    correct: 1
},

{
    category: "informatika",
    difficulty: "kozepes",
    question: "Melyik eszköz kapcsolja össze a hálózatokat és továbbítja az adatcsomagokat?",
    answers: [
        "Router",
        "Monitor",
        "Billentyűzet",
        "Nyomtató"
    ],
    correct: 0
},

{
    category: "informatika",
    difficulty: "kozepes",
    question: "Melyik billentyűkombinációval lehet általában visszavonni az előző műveletet?",
    answers: [
        "Ctrl + A",
        "Ctrl + S",
        "Ctrl + Z",
        "Ctrl + P"
    ],
    correct: 2
},
},
    },

    // FÖLDRAJZ
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
        difficulty: "kozepes",
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
        difficulty: "konnyu",
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
        difficulty: "konnyu",
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
        difficulty: "konnyu",
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
// KATEGÓRIA → NEHÉZSÉG
// =========================

function startQuiz() {

    if (selectedCategories.length === 0) {

        alert("Kérlek, válassz legalább egy kategóriát!");

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


// =========================
// KÉRDÉS MEGJELENÍTÉSE
// =========================

function showQuestion() {

    const question =
        window.gameQuestions[currentQuestionIndex];

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

    const question =
        window.gameQuestions[currentQuestionIndex];

    const buttons =
        document.querySelectorAll("#answers button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedAnswer === question.correct) {

        correctAnswers++;

        buttons[selectedAnswer]
            .classList.add("correct");

    } else {

        wrongAnswers++;

        buttons[selectedAnswer]
            .classList.add("wrong");

        buttons[question.correct]
            .classList.add("correct");
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
