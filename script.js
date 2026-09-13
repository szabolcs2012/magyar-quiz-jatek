// =========================
// KÉRDÉSEK
// =========================

const questions = [
    // 
];


// =========================
// VÁLASZOK KEVERÉSE
// =========================

questions.forEach(function(question) {

    // Elmentjük, melyik válasz volt helyes
    const correctText =
        question.answers[question.correct];

    // Válaszok megkeverése
    question.answers.sort(function() {
        return Math.random() - 0.5;
    });

    // Megkeressük az új helyét a helyes válasznak
    question.correct =
        question.answers.indexOf(correctText);
});
