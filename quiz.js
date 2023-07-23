let questions = [
  {
    question: "In welchem Buch ist die Gesellschaft in Klassen aufgeteilt und Menschen werden genetisch manipuliert, um bestimmte Rollen zu erfüllen?",
    answer_1: "Schöne Neue Welt",
    answer_2: "Fahrenheit 451",
    answer_3: "1984",
    answer_4: "Träumen Androiden von Elektrischen Schafen",
    solution: 1,
  },
  {
    question: "Wie heißt der Protagonist in 'Fahrenheit 451', der ein Feuerwehrmann ist und Bücher verbrennt?",
    answer_1: "John Smith",
    answer_2: "Guy Montag",
    answer_3: "Winston Smith",
    answer_4: "Rick Deckard",
    solution: 2,
  },
  {
    question: "In welchem dystopischen Roman wird der Begriff 'Big Brother is watching you' verwendet?",
    answer_1: "Schöne Neue Welt",
    answer_2: "Fahrenheit 451",
    answer_3: "1984",
    answer_4: "Träumen Androiden von Elektrischen Schafen",
    solution: 3,
  },
  {
    question: "Welcher dystopische Roman wurde von Aldous Huxley geschrieben?",
    answer_1: "Schöne Neue Welt",
    answer_2: "Fahrenheit 451",
    answer_3: "1984",
    answer_4: "Träumen Androiden von Elektrischen Schafen",
    solution: 1,
  },
  {
    question: "In welcher dystopischen Gesellschaft hat das Lesen und der Besitz von Büchern verheerende Konsequenzen?",
    answer_1: "Schöne Neue Welt",
    answer_2: "Fahrenheit 451",
    answer_3: "1984",
    answer_4: "Träumen Androiden von Elektrischen Schafen",
    solution: 2,
  },
  {
    question: "Wie heißt der Totalitarismus-Parteiführer in '1984'?",
    answer_1: "Big Brother",
    answer_2: "Mustapha Mond",
    answer_3: "Hermann Müller",
    answer_4: "Emperor Ming",
    solution: 1,
  },
  {
    question:
      "Welcher dystopische Roman spielt in einer Zukunft, in der die Menschen durch Drogen und Unterhaltung kontrolliert werden?",
    answer_1: "Schöne Neue Welt",
    answer_2: "Fahrenheit 451",
    answer_3: "1984",
    answer_4: "Träumen Androiden von Elektrischen Schafen",
    solution: 1,
  },
  {
    question: "In welchem dystopischen Roman ist die Hauptfigur ein Feuerwehrmann, der Bücher verbrennt, anstatt Brände zu löschen?",
    answer_1: "Schöne Neue Welt",
    answer_2: "Fahrenheit 451",
    answer_3: "1984",
    answer_4: "Träumen Androiden von Elektrischen Schafen",
    solution: 2,
  },
  {
    question: "Welcher Autor schrieb den Roman '1984'?",
    answer_1: "George Orwell",
    answer_2: "Ray Bradbury",
    answer_3: "Aldous Huxley",
    answer_4: "Philip K. Dick",
    solution: 1,
  },
  {
    question:
      "In welchem Buch werden Menschen in der Gesellschaft durch die Einnahme von Soma glücklich gemacht und Konflikte werden vermieden?",
    answer_1: "Schöne Neue Welt",
    answer_2: "Fahrenheit 451",
    answer_3: "1984",
    answer_4: "Träumen Androiden von Elektrischen Schafen",
    solution: 1,
  },
];

let currentQuestion = 0;

function init() {
  setPagination();
  showQuestion();
  showAnswers();
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("question-text").innerHTML = question["question"];
  showAnswers()
}

function showAnswers() {
  let question = questions[currentQuestion];
  for (let i = 1; i < 5; i++) {
    let response = document.getElementById(`answer_${i}`);
    response.innerHTML = question[`answer_${i}`];
  }
}

function setPagination() {
  let length = questions.length;
  let total = document.getElementById("total_questions");
  let pagination = document.getElementById("pagination");
  total.innerHTML = /*html*/ `
   ${length}
   `;

   pagination.innerHTML = /*html*/ `
   ${currentQuestion+1}
   `;
}



function answer(selection) {
  let question = questions[currentQuestion];
  console.log('Selected answer is ', selection);
  let selectedQuestion = selection.slice(-1);
  let solution = question['solution']
  console.log('selectedQuestion is', selectedQuestion);
  console.log('Current question is ', question['solution']);

  if (selectedQuestion == solution) {
    console.log('Antwort ist korrekt');
    document.getElementById(selection).parentNode.classList.add('bg-success')
  }
  else {
    console.log('Antwort ist falsch');
    document.getElementById(selection).parentNode.classList.add('bg-danger')
    document.getElementById(`answer_${solution}`).parentNode.classList.add('bg-success')
  }

  document.getElementById('next-button').disabled = false;
}

function nextQuestion(){
  if (currentQuestion < questions.length-1) {
    currentQuestion++; //Erhöhe um +1
    showQuestion();
    resetButtons()
    setPagination();
  }
  else {
    alert('Alle Fragen wurden beantwortet')
  }
  
    
  }
 
function resetButtons(){
  for (let i = 1; i < 5; i++) {
   document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger', 'bg-success')
  }
  document.getElementById('next-button').disabled = true;
}

