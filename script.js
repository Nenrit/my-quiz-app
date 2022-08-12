
const quizData= [
    {
        question: "What is the capital of India",
        a: "New Delhi",
        b: "Mumbai",
        c: "Chennai",
        d: "Kolkata",
        correct: "b",
    }, 
    {
      question: "What is the capital of USA",
      a: "Mineapolis",
      b: "Peru",
      c: "Washington DC",
      d: "New York",
      correct: "c",
    },
    {
        question: "What is the best laptop product company",
        a: "Apple",
        b: "Lenovo",
        c: "HP",
        d: "Dell",
        correct: "d",
    },
    {
        question: "What is the best mobile product company",
        a: "Apple",
        b: "Samsung",
        c: "Nokia",
        d: "LG",
        correct: "b",
    },
    {
        question: "What is the meaning of HTML",
        a: "Hyper Text Markup Language",
        b: "Hyper Money Markup Language",
        c: "Hyper Text Dot Language",
        d: "Hyper Text Markup System",
        correct: "a",
    },
    {
        question: "What year was JavaScript created",
        a: "1997",
        b: "1996",
        c: "1995",
        d: "1998",
        correct: "c"
    }
]
const question = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submitBtn")
const answerEl = document.querySelectorAll(".answer")
const startBtn = document.getElementById("startBtn")
const resultText= document.getElementById("resultText")
const restartBtn = document.getElementById("restartBtn")
const quizContainer = document.getElementById("quizContainer")
const resultBox = document.getElementById("resultBox")

startBtn.onclick = () => {
    startBtn.classList.add("hidden")
    quizContainer.classList.add("active")
}
    restartBtn.onclick = () => {
        window.location.reload()
    }

let currentQuiz = 0
let score = 0

function loadQuiz() {
    deselectAll()
    const currentQuizData = quizData[currentQuiz]
    question.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}                                                               
loadQuiz()

function getAnswer(){
    let userAnswer = undefined
    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            userAnswer = answerEl.id
        }
    })
     return userAnswer
    }

    function deselectAll() {
        answerEl.forEach((answerEl) =>{
            answerEl.checked = false
        })
    }
   
    submitBtn.onclick = () => {
        const userAnswer = getAnswer ()
        if (userAnswer == quizData[currentQuiz].correct) {
            score++
            console.log(score)
        }

        if (userAnswer) {
            currentQuiz++
            if (currentQuiz < quizData.length) {
                loadQuiz()
            } else {
                quizContainer.classList.remove("active")
                resultBox.classList.add("active")
                resultText.innerText = `You scored ${score} out of ${quizData.length} `
            }
        } else {
            alert ("select an answer")
        } 
    }


