var currentQuestion = 0;
var score = 0;
let questions = [
    {
        question: "chi di loro ha balzato?",
        answers: ["gobby", "abde", "denno", "disa"],
        correctAnswer: 3
    },
    {
        question: "qual'è la media voti con breviario?",
        answers: ["5,5", "8", "6", "7"],
        correctAnswer: 0
    },
    {
        question: "quanti ne prende besh ;) ?",
        answers: ["5", "8", "6", "7"],
        correctAnswer: 1
    },
    {
        question: "con cosa sono arrivati gli europei in america?",
        answers: ["nave", "bus", "sottomarino", "CON L'IVECO"],
        correctAnswer: 1
    }
];

function loadQuestion(questionNumber) {
    var question = questions[questionNumber];
    $('h2').text(question.question);
    var answersHtml = '';
    for (var i = 0; i < question.answers.length; i++) {
        answersHtml += '<li><input type="radio" name="answer" value="' + i + '">' +
            question.answers[i] + '</li>';
    }
    $('ul').html(answersHtml);
}


function checkAnswer() {
    var userAnswer = $('input[name="answer"]:checked').val();
    if (userAnswer == undefined) {
        alert('Selezionare una risposta!');
        return;
    }
    var question = questions[currentQuestion];
    if (userAnswer == question.correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion(currentQuestion);
    }
    else {
        showResults();
    }
}
function showResults() {
    var html = '<h2>Risultati</h2>';
    html += '<p>Hai totalizzato ' + score + ' punti su ' + questions.length + '.</p>';
    $('#quiz').html(html);
}