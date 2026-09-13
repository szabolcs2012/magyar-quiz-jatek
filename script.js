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
        "Csak olvasási műveletet végez",
        "Nem lehet visszavonni"
    ],
    correct: 1
},

{
    category: "informatika",
    difficulty: "nehez",
    question: "Melyik algoritmus alkalmas rendezett tömbben bináris keresésre?",
    answers: [
        "Buborékrendezés",
        "Bináris keresés",
        "Mélységi keresés",
        "Lineáris keresés"
    ],
    correct: 1
},

{
    category: "informatika",
    difficulty: "nehez",
    question: "Melyik hálózati réteghez kapcsolódik az IP protokoll az OSI-modellben?",
    answers: [
        "Alkalmazási réteg",
        "Szállítási réteg",
        "Hálózati réteg",
        "Fizikai réteg"
    ],
    correct: 2
},

{
    category: "informatika",
    difficulty: "nehez",
    question: "Mit jelent a virtualizáció?",
    answers: [
        "Csak fájlok titkosítását",
        "Virtuális erőforrások vagy gépek létrehozását fizikai erőforrásokon",
        "A monitor felbontásának növelését",
        "Az internet sebességének növelését"
    ],
    correct: 1
},

{
    category: "informatika",
    difficulty: "nehez",
    question: "Melyik memóriatípus veszti el tartalmát a számítógép kikapcsolásakor?",
    answers: [
        "SSD",
        "ROM",
        "RAM",
        "Flash memória"
    ],
    correct: 2
},
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
        {
    category: "foldrajz",
    difficulty: "konnyu",
    question: "Melyik kontinensen található Magyarország?",
    answers: [
        "Ázsia",
        "Európa",
        "Afrika",
        "Dél-Amerika"
    ],
    correct: 1
},

{
    category: "foldrajz",
    difficulty: "konnyu",
    question: "Melyik ország fővárosa Bécs?",
    answers: [
        "Ausztria",
        "Svájc",
        "Németország",
        "Belgium"
    ],
    correct: 0
},

{
    category: "foldrajz",
    difficulty: "konnyu",
    question: "Melyik a Föld legmagasabb hegye?",
    answers: [
        "K2",
        "Mount Everest",
        "Mont Blanc",
        "Kilimandzsáró"
    ],
    correct: 1
},

{
    category: "foldrajz",
    difficulty: "konnyu",
    question: "Melyik tenger található Magyarországhoz legközelebb?",
    answers: [
        "Fekete-tenger",
        "Adriai-tenger",
        "Balti-tenger",
        "Északi-tenger"
    ],
    correct: 1
},

{
    category: "foldrajz",
    difficulty: "konnyu",
    question: "Melyik folyó folyik át Budapesten?",
    answers: [
        "Tisza",
        "Duna",
        "Dráva",
        "Rába"
    ],
    correct: 1
},

{
    category: "foldrajz",
    difficulty: "konnyu",
    question: "Melyik országban található Párizs?",
    answers: [
        "Olaszország",
        "Spanyolország",
        "Franciaország",
        "Portugália"
    ],
    correct: 2
},

{
    category: "foldrajz",
    difficulty: "konnyu",
    question: "Melyik a legkisebb kontinens?",
    answers: [
        "Európa",
        "Ausztrália",
        "Afrika",
        "Antarktisz"
    ],
    correct: 1
},

{
    category: "foldrajz",
    difficulty: "konnyu",
    question: "Melyik ország híres a piramisairól?",
    answers: [
        "Egyiptom",
        "India",
        "Kanada",
        "Norvégia"
    ],
    correct: 0
},

{
    category: "foldrajz",
    difficulty: "konnyu",
    question: "Melyik égtáj irányába nyugszik le a Nap?",
    answers: [
        "Észak",
        "Kelet",
        "Dél",
        "Nyugat"
    ],
    correct: 3
},

{
    category: "foldrajz",
    difficulty: "konnyu",
    question: "Melyik országban található Róma?",
    answers: [
        "Görögország",
        "Olaszország",
        "Spanyolország",
        "Horvátország"
    ],
    correct: 1
            {
    category: "foldrajz",
    difficulty: "kozepes",
    question: "Melyik ország területén található az Alpok legnagyobb része?",
    answers: [
        "Ausztria",
        "Svájc",
        "Németország",
        "Franciaország"
    ],
    correct: 0
},

{
    category: "foldrajz",
    difficulty: "kozepes",
    question: "Melyik folyó a leghosszabb Európában?",
    answers: [
        "Duna",
        "Volga",
        "Rajna",
        "Tisza"
    ],
    correct: 1
},

{
    category: "foldrajz",
    difficulty: "kozepes",
    question: "Melyik országban található a Szahara legnagyobb része?",
    answers: [
        "Egyiptom",
        "Líbia",
        "Algéria",
        "Marokkó"
    ],
    correct: 2
},

{
    category: "foldrajz",
    difficulty: "kozepes",
    question: "Melyik tenger választja el Európát Afrikától?",
    answers: [
        "Földközi-tenger",
        "Fekete-tenger",
        "Balti-tenger",
        "Északi-tenger"
    ],
    correct: 0
},

{
    category: "foldrajz",
    difficulty: "kozepes",
    question: "Melyik ország fővárosa Oslo?",
    answers: [
        "Svédország",
        "Norvégia",
        "Finnország",
        "Dánia"
    ],
    correct: 1
},

{
    category: "foldrajz",
    difficulty: "kozepes",
    question: "Melyik a világ legnagyobb sivataga?",
    answers: [
        "Szahara",
        "Góbi",
        "Antarktiszi-sivatag",
        "Arab-sivatag"
    ],
    correct: 2
},

{
    category: "foldrajz",
    difficulty: "kozepes",
    question: "Melyik országban található a Himalája jelentős része?",
    answers: [
        "Nepál",
        "Spanyolország",
        "Mexikó",
        "Ausztrália"
    ],
    correct: 0
},

{
    category: "foldrajz",
    difficulty: "kozepes",
    question: "Melyik folyó torkollik a Fekete-tengerbe?",
    answers: [
        "Duna",
        "Temze",
        "Szajna",
        "Pó"
    ],
    correct: 0
},

{
    category: "foldrajz",
    difficulty: "kozepes",
    question: "Melyik ország a legnagyobb területű a világon?",
    answers: [
        "Kanada",
        "Kína",
        "Oroszország",
        "USA"
    ],
    correct: 2
},

{
    category: "foldrajz",
    difficulty: "kozepes",
    question: "Melyik országban található a Gíza-fennsík?",
    answers: [
        "Törökország",
        "Egyiptom",
        "Jordánia",
        "Tunézia"
    ],
    correct: 1
            {
    category: "foldrajz",
    difficulty: "nehez",
    question: "Melyik országban található a Föld legmélyebb tava, a Bajkál-tó?",
    answers: [
        "Kazahsztán",
        "Oroszország",
        "Mongólia",
        "Kína"
    ],
    correct: 1
},

{
    category: "foldrajz",
    difficulty: "nehez",
    question: "Melyik ország területén található a Kalahári-sivatag jelentős része?",
    answers: [
        "Botswana",
        "Marokkó",
        "Egyiptom",
        "Etiópia"
    ],
    correct: 0
},

{
    category: "foldrajz",
    difficulty: "nehez",
    question: "Melyik tengerszoros választja el Európát Afrikától?",
    answers: [
        "Boszporusz",
        "Gibraltári-szoros",
        "Bering-szoros",
        "Dardanellák"
    ],
    correct: 1
},

{
    category: "foldrajz",
    difficulty: "nehez",
    question: "Melyik országban található a Pamír-hegység jelentős része?",
    answers: [
        "Tádzsikisztán",
        "Görögország",
        "Mexikó",
        "Chile"
    ],
    correct: 0
},

{
    category: "foldrajz",
    difficulty: "nehez",
    question: "Melyik folyó szeli át Egyiptomot és torkollik a Földközi-tengerbe?",
    answers: [
        "Kongó",
        "Nílus",
        "Zambézi",
        "Niger"
    ],
    correct: 1
},

{
    category: "foldrajz",
    difficulty: "nehez",
    question: "Melyik országban található a Salar de Uyuni, a világ egyik legnagyobb sómezeje?",
    answers: [
        "Peru",
        "Bolívia",
        "Chile",
        "Argentína"
    ],
    correct: 1
},

{
    category: "foldrajz",
    difficulty: "nehez",
    question: "Melyik éghajlati övben található a tundra?",
    answers: [
        "Egyenlítői öv",
        "Mérsékelt öv",
        "Hideg öv",
        "Forró öv"
    ],
    correct: 2
},

{
    category: "foldrajz",
    difficulty: "nehez",
    question: "Melyik ország fővárosa Ulaanbaatar?",
    answers: [
        "Mongólia",
        "Üzbegisztán",
        "Kirgizisztán",
        "Kazahsztán"
    ],
    correct: 0
},

{
    category: "foldrajz",
    difficulty: "nehez",
    question: "Melyik óceáni áramlat melegíti Nyugat-Európa éghajlatát?",
    answers: [
        "Labrador-áramlás",
        "Golf-áramlás",
        "Perui-áramlás",
        "Benguela-áramlás"
    ],
    correct: 1
},

{
    category: "foldrajz",
    difficulty: "nehez",
    question: "Melyik országban található a Cotopaxi vulkán?",
    answers: [
        "Ecuador",
        "Brazília",
        "Kolumbia",
        "Peru"
    ],
    correct: 0
},
},
},
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
        {
    category: "tortenelem",
    difficulty: "kozepes",
    question: "Melyik évben adták ki az Aranybullát?",
    answers: [
        "1222",
        "1241",
        "1301",
        "1456"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "kozepes",
    question: "Ki volt a tatárjárás idején Magyarország királya?",
    answers: [
        "II. András",
        "IV. Béla",
        "I. Károly",
        "Mátyás király"
    ],
    correct: 1
},

{
    category: "tortenelem",
    difficulty: "kozepes",
    question: "Melyik magyar király nevéhez fűződik a fekete sereg?",
    answers: [
        "Szent István",
        "IV. Béla",
        "Hunyadi Mátyás",
        "Könyves Kálmán"
    ],
    correct: 2
},

{
    category: "tortenelem",
    difficulty: "kozepes",
    question: "Mikor volt a nándorfehérvári diadal?",
    answers: [
        "1241",
        "1456",
        "1526",
        "1541"
    ],
    correct: 1
},

{
    category: "tortenelem",
    difficulty: "kozepes",
    question: "Ki vezette a szabadságharc egyik jelentős seregét 1849-ben?",
    answers: [
        "Görgei Artúr",
        "Deák Ferenc",
        "Batthyány Lajos",
        "Ady Endre"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "kozepes",
    question: "Melyik esemény történt 1956. október 23-án?",
    answers: [
        "A honfoglalás",
        "A forradalom és szabadságharc kezdete",
        "A mohácsi csata",
        "A kiegyezés"
    ],
    correct: 1
},

{
    category: "tortenelem",
    difficulty: "kozepes",
    question: "Melyik évben született meg a kiegyezés Ausztria és Magyarország között?",
    answers: [
        "1848",
        "1867",
        "1918",
        "1920"
    ],
    correct: 1
},

{
    category: "tortenelem",
    difficulty: "kozepes",
    question: "Ki volt az első magyar miniszterelnök 1848-ban?",
    answers: [
        "Kossuth Lajos",
        "Batthyány Lajos",
        "Széchenyi István",
        "Görgei Artúr"
    ],
    correct: 1
},

{
    category: "tortenelem",
    difficulty: "kozepes",
    question: "Melyik évben írták alá a trianoni békeszerződést?",
    answers: [
        "1918",
        "1919",
        "1920",
        "1921"
    ],
    correct: 2
},

{
    category: "tortenelem",
    difficulty: "kozepes",
    question: "Melyik eseményhez kapcsolódik II. Rákóczi Ferenc neve?",
    answers: [
        "Rákóczi-szabadságharc",
        "1848-as forradalom",
        "Honfoglalás",
        "Török kiűzése"
    ],
    correct: 0
},
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
        {
    category: "tortenelem",
    difficulty: "konnyu",
    question: "Mikor volt az 1848–49-es forradalom és szabadságharc kezdete?",
    answers: [
        "1848",
        "1867",
        "1914",
        "1956"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "konnyu",
    question: "Ki volt a magyarok fejedelme a honfoglalás idején?",
    answers: [
        "Árpád",
        "Szent István",
        "Mátyás király",
        "Kossuth Lajos"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "konnyu",
    question: "Melyik évben koronázták királlyá Szent Istvánt?",
    answers: [
        "1000/1001",
        "896",
        "1241",
        "1458"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "konnyu",
    question: "Ki volt híres magyar király a Hunyadiak korában?",
    answers: [
        "Mátyás király",
        "IV. Béla",
        "I. István",
        "II. András"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "konnyu",
    question: "Melyik évben történt a magyar honfoglalás kezdete?",
    answers: [
        "896",
        "1000",
        "1241",
        "1526"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "konnyu",
    question: "Ki volt az 1848–49-es szabadságharc egyik legismertebb vezetője?",
    answers: [
        "Kossuth Lajos",
        "Széchenyi István",
        "Deák Ferenc",
        "Mikszáth Kálmán"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "konnyu",
    question: "Melyik évben tört ki a magyar forradalom 1956-ban?",
    answers: [
        "1945",
        "1956",
        "1968",
        "1989"
    ],
    correct: 1
},

{
    category: "tortenelem",
    difficulty: "konnyu",
    question: "Ki volt Magyarország első királya?",
    answers: [
        "Szent István",
        "Mátyás király",
        "Árpád",
        "IV. Béla"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "konnyu",
    question: "Melyik birodalom uralta Magyarország középső részét évszázadokon át?",
    answers: [
        "Oszmán Birodalom",
        "Római Birodalom",
        "Brit Birodalom",
        "Francia Birodalom"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "konnyu",
    question: "Mikor történt a rendszerváltás Magyarországon?",
    answers: [
        "1945",
        "1956",
        "1989–1990",
        "2004"
    ],
    correct: 2
    {
    category: "tortenelem",
    difficulty: "nehez",
    question: "Melyik évben kezdődött a mohácsi csata?",
    answers: [
        "1526",
        "1541",
        "1456",
        "1505"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "nehez",
    question: "Melyik uralkodó idején történt a mohácsi csata?",
    answers: [
        "II. Lajos",
        "Hunyadi Mátyás",
        "II. András",
        "IV. Béla"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "nehez",
    question: "Melyik évben foglalták el a törökök Budát?",
    answers: [
        "1526",
        "1541",
        "1566",
        "1686"
    ],
    correct: 1
},

{
    category: "tortenelem",
    difficulty: "nehez",
    question: "Ki vezette az 1703-ban kezdődő Rákóczi-szabadságharcot?",
    answers: [
        "II. Rákóczi Ferenc",
        "Kossuth Lajos",
        "Széchenyi István",
        "Görgei Artúr"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "nehez",
    question: "Melyik békeszerződés zárta le Magyarország számára az első világháborút?",
    answers: [
        "Versailles-i béke",
        "Trianoni békeszerződés",
        "Saint-Germain-i béke",
        "Párizsi béke"
    ],
    correct: 1
},

{
    category: "tortenelem",
    difficulty: "nehez",
    question: "Melyik évben ért véget a második világháború Európában?",
    answers: [
        "1943",
        "1944",
        "1945",
        "1946"
    ],
    correct: 2
},

{
    category: "tortenelem",
    difficulty: "nehez",
    question: "Ki volt Magyarország kormányzója 1920 és 1944 között?",
    answers: [
        "Horthy Miklós",
        "Teleki Pál",
        "Bethlen István",
        "Károlyi Mihály"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "nehez",
    question: "Melyik évben kezdődött a második világháború?",
    answers: [
        "1937",
        "1938",
        "1939",
        "1941"
    ],
    correct: 2
},

{
    category: "tortenelem",
    difficulty: "nehez",
    question: "Melyik történelmi eseményhez kapcsolódik a Pákozdi csata?",
    answers: [
        "1848–49-es forradalom és szabadságharc",
        "Rákóczi-szabadságharc",
        "Mohácsi csata",
        "Tatárjárás"
    ],
    correct: 0
},

{
    category: "tortenelem",
    difficulty: "nehez",
    question: "Melyik évben zajlott a pozsonyi országgyűlés, amelyen Széchenyi István felajánlotta egyévi jövedelmét a Magyar Tudós Társaság számára?",
    answers: [
        "1825",
        "1848",
        "1867",
        "1802"
    ],
    correct: 0
},
},
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
            {
    category: "biologia",
    difficulty: "konnyu",
    question: "Melyik szerv felelős elsősorban a légzésért?",
    answers: [
        "Szív",
        "Tüdő",
        "Máj",
        "Vese"
    ],
    correct: 1
},

{
    category: "biologia",
    difficulty: "konnyu",
    question: "Hány szeme van általában egy embernek?",
    answers: [
        "1",
        "2",
        "3",
        "4"
    ],
    correct: 1
},

{
    category: "biologia",
    difficulty: "konnyu",
    question: "Melyik tápanyag ad gyorsan energiát a szervezetnek?",
    answers: [
        "Szénhidrát",
        "Vitamin",
        "Víz",
        "Ásványi anyag"
    ],
    correct: 0
},

{
    category: "biologia",
    difficulty: "konnyu",
    question: "Melyik testrész segítségével hallunk?",
    answers: [
        "Szem",
        "Orr",
        "Fül",
        "Nyelv"
    ],
    correct: 2
},

{
    category: "biologia",
    difficulty: "konnyu",
    question: "Melyik szerv tisztítja a vért és termeli a vizeletet?",
    answers: [
        "Tüdő",
        "Vese",
        "Szív",
        "Gyomor"
    ],
    correct: 1
},

{
    category: "biologia",
    difficulty: "konnyu",
    question: "Melyik állat emlős?",
    answers: [
        "Cápa",
        "Béka",
        "Delfin",
        "Gyík"
    ],
    correct: 2
},

{
    category: "biologia",
    difficulty: "konnyu",
    question: "Melyik növényi rész végzi főként a fotoszintézist?",
    answers: [
        "Gyökér",
        "Levél",
        "Virág",
        "Termés"
    ],
    correct: 1
},

{
    category: "biologia",
    difficulty: "konnyu",
    question: "Hány lába van egy rovarnak?",
    answers: [
        "4",
        "6",
        "8",
        "10"
    ],
    correct: 1
},

{
    category: "biologia",
    difficulty: "konnyu",
    question: "Melyik szerv emészti meg a táplálékot a gyomor után?",
    answers: [
        "Vékonybél",
        "Tüdő",
        "Vese",
        "Szív"
    ],
    correct: 0
},

{
    category: "biologia",
    difficulty: "konnyu",
    question: "Melyik vitamin képződését segíti a napfény?",
    answers: [
        "A-vitamin",
        "C-vitamin",
        "D-vitamin",
        "K-vitamin"
    ],
    correct: 2
},
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
