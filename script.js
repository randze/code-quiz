// Quiz Questions Array
var quizQ = [
    {   question: '1. The basic difference between JavaScript and Java is ________', 
        ansA: 'There is no difference',
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

for ( var idx = 0 ; idx < quizQ.length ; idx++ ){
    var question = quizQ[idx].question;
    var ansA = quizQ[idx].ansA;
    var ansB = quizQ[idx].ansB;
    var ansC = quizQ[idx].ansC;
    var ansD = quizQ[idx].ansD;
    var rightAns = quizQ[idx].rightAns;

    document.querySelector('#questions').innerHTML += 
    `
    <article class='question${idx}'>
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
}