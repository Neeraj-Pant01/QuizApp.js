 const quiz = [{
     ques: "Q1. what is the ful form of apk?",
     a: "Application Protocol Package",
     b: "Android Application kit",
     c: "Application provider kit",
     d: "Android Application Package",
     ans: "ans4"
 },
 {
     ques: "Q2. what is the full form of oop?",
     a: "object objective programming",
     b: "object oriented programming",
     c: "objective outcome programming",
     d: "none of the above",
     ans: "ans2"
 },
{
    ques: "Q3. when was javascript first introduced?",
    a: "1995",
    b: "1990",
    c: "1985",
    d: "2001",
    ans: "ans1"
},
{
    ques: "Q4. what is the first ever programming language?",
    a: "c",
    b: "java",
    c: ".net",
    d: "fortran",
    ans: "ans4"
}
];

let question = document.getElementById('ques');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');

const scorecard = document.querySelector('.scorecard');

const answers = document.querySelectorAll('.options');
let btn = document.getElementById('btn');

let questionNumber = 0;
let score = 0;

const loadQuestion = () =>{
    const questionList = quiz[questionNumber];
    question.innerHTML = questionList.ques;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}
loadQuestion();

const checkAnswer = () =>{
    let answer;
    answers.forEach((curAns)=>{
        if(curAns.checked){
            answer=curAns.id;
        }
    });
    return answer;
};

const deselect = () =>{
    answers.forEach((curAns)=>{
        (curAns.checked = false)
    })
}

btn.onclick = ()=>{
    const checkans = checkAnswer();
    if(checkans==quiz[questionNumber].ans){
        score++;
    };

    questionNumber++;
    deselect();

    if(questionNumber < quiz.length){
        loadQuestion();
    }
    else{
        scorecard.innerHTML = `
        <h3 class="scores">you scored ${score} ☺ </h3>
        <button id="restart" onclick="location.reload()"> play again </button>
        `
        scorecard.classList.remove('scorecard');
    }
}