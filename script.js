// Quiz Questions Array
var quizQ = [
    {   question: '1. The basic difference between JavaScript and Java is ________', 
        ansA: 'A - There is no difference',
        ansB: 'B - Functions are considered as fields',
        ansC: 'C - Variables are specific',
        ansD: 'D - Functions are values, and there is no hard distinction',
        rightAns: 'D' },
    {   question: '2. A JavaScript program developed on a Unix Machine ________', 
        ansA: 'A - will throw errors and exceptions',
        ansB: 'B - must be restricted to a Unix Machine only',
        ansC: 'C - will work perfectly well on a Windows Machine',
        ansD: 'D - will be displayed as a JavaScript text on the browser',
        rightAns: 'C' },
    {   question: '3. JavaScript Code can be called by using ________', 
        ansA: 'A - RMI',
        ansB: 'B - Triggering Event',
        ansC: 'C - Preprocessor',
        ansD: 'D - Function/Method',
        rightAns: 'D' },
    {   question: '4. The property of a primary expression is ________', 
        ansA: 'A - stand-alone expressions',
        ansB: 'B - basic expressions containing all necessary functions',
        ansC: 'C - contains variable references alone',
        ansD: 'D - contains only keywords',
        rightAns: 'A' },
    {   question: '5. Do functions in JavaScript necessarily return a value?', 
        ansA: 'A - It is mandatory',
        ansB: 'B - Not necessary',
        ansC: 'C - Few functions return values by default',
        ansD: 'D - Some functions do not return any value',
        rightAns: 'C' }
];
        // Template for adding more questions/answers
        // {   question: '', 
        // ansA: 'A - ',
        // ansB: 'B - ',
        // ansC: 'C - ',
        // ansD: 'D - ',
        // rightAns: '' }

var qSheet = document.querySelector('#questions')
var userAnswers = []
var correctAns = 0
var countdown = 0
var score = 0
var scoreTimer = 0;

// Generate question page
function questionGen(num){
    var question = quizQ[num].question;
    var ansA = quizQ[num].ansA;
    var ansB = quizQ[num].ansB;
    var ansC = quizQ[num].ansC;
    var ansD = quizQ[num].ansD;
    var rightAns = quizQ[num].rightAns;

    
    qSheet.innerHTML = 
    `
    <article class='question${num}'>
        <h4>${question}</h3>
        <hr/>
        <div class="row align-items-center">
            <div class="col-12 col-sm-6">
                <button id="answerA" type="button" class="btn btn-secondary top-buffer">${ansA}</button>
            </div>
            <div class="col-12 col-sm-6">
                <button id="answerB" type="button" class="btn btn-secondary top-buffer">${ansB}</button>
            </div>
            <div class="col-12 col-sm-6">
                <button id="answerC" type="button" class="btn btn-secondary top-buffer">${ansC}</button>
            </div>
            <div class="col-12 col-sm-6">
                <button id="answerD" type="button" class="btn btn-secondary top-buffer">${ansD}</button>
            </div>
        </div>
    </article>
    `;
    document.getElementById("answerA").onclick = function(){answerClick('A')}
    document.getElementById("answerB").onclick = function(){answerClick('B')}
    document.getElementById("answerC").onclick = function(){answerClick('C')}
    document.getElementById("answerD").onclick = function(){answerClick('D')}
}

// Function to react to question answers
function answerClick(letter){
    userAnswers.push(letter);
    if( userAnswers[countdown] == quizQ[countdown].rightAns ) {
        correctAns++
    }
    if( userAnswers[countdown] != quizQ[countdown].rightAns ) {
        score = score-10
    }
    console.log(`Answered`)
    countdown++
    if (countdown == quizQ.length){ scorePage() }
    else if (countdown < quizQ.length) {
    questionGen(countdown)
    }
}

// Start Page
function startPage() {
    userAnswers = []
    correctAns = 0
    countdown = 0
    score = 75

    qSheet.innerHTML = 
    `
    <article>
        <h3>Vad är Lorem Ipsum?</h3>
        <p>
        Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
        </p>
        <button id="start" type="button" class="btn" style="background-color: rgb(149, 95, 173);color: white;">Start Quiz</button>
    </article> 
    `
    document.getElementById("start").addEventListener("click", quizStart);
}

// Initiate quizStart timer
function quizStart(){
    score = 75;
    scoreTimer = setInterval(function() {
        score--
        document.getElementById("timer").innerHTML = `<p>Score: ${score}</p>`;
    
        if(score === 0) {
          scorePage()
        }
    }, 1000);

    questionGen(countdown)
}

// Score Page
function scorePage() {
    qSheet.innerHTML = 
    `
    <article>
        <h3>Done !!!</h3>
        <p>You got <span style="font-weight:bold">${correctAns}</span> out of <span style="font-weight:bold">${quizQ.length}</span> correct with a score of <span style="font-weight:bold">${score} !</span></p>
        <br>
        <div class="input-group mb-3">
            <input id="name" type="text" class="form-control" placeholder="Initials" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <div class="input-group-append">
                <button id="storeScore" class="btn btn-outline-secondary" type="button"style="background-color: rgb(149, 95, 173);color: white;">Submit</button>
            </div>
        </div>
    </article> 
    `
    clearInterval(scoreTimer)

    document.getElementById("name").focus();
    document.getElementById("storeScore").addEventListener("click", function(){
        var name = document.getElementById("name").value
        localStorage.setItem('theScore', name + " - " + score);
        scoreboard()
    });
}

// Generate Scoreboard Page
function scoreboard(){
    var scoreboardList = localStorage.getItem('theScore')
    qSheet.innerHTML = 
    `
    <article>
        <h3>Scoreboard</h3>
        <hr/>
        <ol class="list-group">
            <li class="list-group-item list-group-item-warning">${scoreboardList}</li>
        </ol>
        <hr/>
    </article> 
    `
    // for ( idx=0 ; idx<localStorage.length ; idx++ ){
    //     var scoreList = localStorage.getItem('');
    // }
}

// First Start Button
document.getElementById("start").addEventListener("click", quizStart);