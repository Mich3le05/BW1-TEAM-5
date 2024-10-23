const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let currentQuestionIndex = 0;
let score = 0;
let results = [];
let percentage = 0;
let totalTime;
let futureTime;
let startTime;
let timerLoop;

//INIZIO CODICE

window.onload = showQuestion;

const initializeTimer = () => {
  // impostiamo il tempo
  let hr = 0;
  let min = 1; // Set the timer to 1 minute
  let sec = 0;

  // convertiamo il tempo in millisecond poichè js usa i millisecondi
  const hoursInMs = hr * 3600000;
  const minutesInMs = min * 60000;
  const secondsInMs = sec * 1000;

  totalTime = hoursInMs + minutesInMs + secondsInMs;
  startTime = Date.now();
  futureTime = startTime + totalTime;

  // Start the animation
  startAnimation();
};

// importiamo gli elementi da html
const timerDisplay = document.getElementById("timer");
const semicircles = document.querySelectorAll(".semicircle");

const startAnimation = () => {
  semicircles.forEach(s => {
    s.style.transform = "rotate(0deg)";
    s.style.display = "block"; // Reset display for animation
  });
};

const countDown = () => {
  const currentTime = Date.now();
  const remainingTime = futureTime - currentTime;

  const secondsRemaining = Math.floor(remainingTime / 1000);

  // Ferma il timer quando arriva a 0
  if (secondsRemaining <= 0) {
    clearInterval(timerLoop);
    /// se l'utente non risponde in tempo il results finale avrà un "sbagliato" cioè 0 
    if(!results[currentQuestionIndex]){
      results.push(0)
    }
    timerDisplay.innerHTML = `<p>Time's up</p>`;
    semicircles.forEach((s) => (s.style.transform = "rotate(180deg)"));
    nextQuestion();
    return;
  }

  // animazione
  const angle = (remainingTime / totalTime) * 360;
  updateSemicircles(angle);
  
  // testo
  timerDisplay.innerHTML = 
`<p>SECONDS</p><h1>${secondsRemaining < 10 ? "0" : ""}${secondsRemaining}</h1><p>REMAINING</p>`;
};

const updateSemicircles = (angle) => {
  if (angle > 180) {
    semicircles[2].style.display = "none";
    semicircles[0].style.transform = "rotate(180deg)";
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  } else {
    semicircles[1].style.display = "none";
    semicircles[2].style.display = "block";
    semicircles[0].style.transform = `rotate(${angle}deg)`;
  }
};

/// FUNZIONE PER MOSTRARE LA DOMANDA CORRENTE E LE RISPOSTE
function showQuestion() {
  
  const counter = document.getElementById("span1");
  counter.textContent = currentQuestionIndex + 1; // contatore

  const questionElement = document.querySelector("#question");
  const buttons = document.querySelectorAll("#buttons button");
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  // Mescolare le risposte
  const answers = [
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers,
  ];
  answers.sort(() => Math.random() - 0.5);

  buttons.forEach((button, index) => {
    button.textContent = answers[index];
    button.style.display = "block";
    if (button.textContent === ""){
      console.log("ciao")
      button.style.display = "none";
    } 
    button.disabled = false; // Riabilitare il bottone per la nuova domanda e rimuovere i colori
    button.classList.remove("selected", "green", "red");

    // Controllare se l'utente ha già risposto alla domanda
    if (results.length > currentQuestionIndex) {
      if (results[currentQuestionIndex] === 1) {
        button.classList.add("green"); // Risposta corretta
      } else if (results[currentQuestionIndex] === 0) {
        button.classList.add("red"); // Risposta sbagliata
      }
      button.disabled = true; // Disabilitare il bottone se la domanda è già stata risposta
    } else {
      button.onclick = () =>
        selectAnswer(button, answers[index] === currentQuestion.correct_answer);
    }
  });

  // reset del pulsante Next
  document.getElementById("nextButton").disabled = true;

  initializeTimer();
  countDown();
  timerLoop = setInterval(countDown, 1000);
}

/// f. per scegliere la risposta
function selectAnswer(button, Correct) {
  const buttons = document.querySelectorAll("#buttons button");

  // Disabilitare tutti i bottoni
  buttons.forEach((btn) => (btn.disabled = true));

  // Aggiungere la classe selected alla risposta scelta
  button.classList.add("selected");

  if (Correct) {
    button.classList.add("green"); // Risposta corretta
    score++;
    results.push(1); // Aggiorna il punteggio
  } else {
    button.classList.add("red"); // Risposta sbagliata
    results.push(0); // Aggiorna il punteggio
  }

  // Abilita il pulsante Next
  //SE IL PULSANTE è ABILITATO, QUINDI L'USER HA FATTO UNA SCELTA, IL BOTTONE PUO ESSERE CLICCATO, E DIAMO UN POINTER
  //COSI CHE L'USER POSSA CAPIRLO
    document.getElementById("nextButton").disabled = false;
    if (document.getElementById("nextButton").disabled === false) {

      document.getElementById("nextButton").style.cursor = "pointer";
    }
}

/// f. per passare alla domanda successiva
function nextQuestion() {
  currentQuestionIndex++;
  clearInterval(timerLoop); // Clear the timer when moving to the next question
  if (currentQuestionIndex < questions.length) {
    showQuestion();;
  } else {
    showScore();
  }
}

/// pulsante NEXT
document.getElementById("nextButton").addEventListener("click", nextQuestion);

/// mostrare il punteggio finale
function showScore() {
  percentage = (score / questions.length) * 100;
  const mainE = document.querySelector("main");
  mainE.innerHTML = `<h1>Quiz completato!</h1><p> Il tuo punteggio è ${score} su ${questions.length}.</p>
      <p>Percenuale risposte corrette: ${percentage.toFixed(2)}%</p>`;

  // LOCAL STORAGE
  localStorage.setItem("quizResults", JSON.stringify(results));
  window.location.href = "result.html";
}

//facciamo partire il timer e il conto alla rovescia
initializeTimer();
countDown();
