```javascript
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

    // =========================
    // INFORMATIKA
    // =========================

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
    },

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
    },

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

    {
        category: "informatika",
        difficulty: "nehez",
        question: "Melyik adatszerkezet működik LIFO elv alapján?",
        answers: [
            "Sor (queue)",
            "Verem (stack)",
            "Fa (tree)",
            "Gráf (graph)"
        ],
        correct: 1
    },

    {
        category: "informatika",
        difficulty: "nehez",
        question: "Mit jelent az O(n) jelölés az algoritmusoknál?",
        answers: [
            "A memória mérete fix",
            "A futási idő lineárisan nő a bemenet méretével",
            "Az algoritmus mindig konstans időben fut",
            "Az algoritmus csak numerikus adatot kezel"
        ],
        correct: 1
    },

    {
        category: "informatika",
        difficulty: "nehez",
        question: "Melyik adatbázis nyelvet használják relációs adatbázisok lekérdezésére?",
        answers: [
            "SQL",
            "HTML",
            "CSS",
            "JSON"
        ],
        correct: 0
    },

    {
        category: "informatika",
        difficulty: "nehez",
        question: "Mi a hash függvény egyik fontos tulajdonsága?",
        answers: [
            "Mindig visszaállíthatóvá teszi az eredeti adatot",
            "Azonos bemenethez azonos hash értéket ad",
            "Csak képeket tud feldolgozni",
            "Mindig ugyanakkora bemenetet igényel"
        ],
        correct: 1
    },

    {
        category: "informatika",
        difficulty: "nehez",
        question: "Melyik protokollt használják e-mailek küldésére?",
        answers: [
            "SMTP",
            "FTP",
            "DNS",
            "SSH"
        ],
        correct: 0
    },

    {
        category: "informatika",
        difficulty: "nehez",
        question: "Mi a tranzakció egyik alapvető tulajdonsága adatbázisban?",
        answers: [
            "Mindig törli az adatokat",
            "Atomikus lehet",
            "Csak olvasási
```

