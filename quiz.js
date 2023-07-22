let questions = [
  {
    question: "In welchem Buch ist die Gesellschaft in Klassen aufgeteilt und Menschen werden genetisch manipuliert, um bestimmte Rollen zu erfüllen?",
    response_1: "Schöne Neue Welt",
    response_2: "Fahrenheit 451",
    response_3: "1984",
    response_4: "Träumen Androiden von Elektrischen Schafen",
    solution: 1,
  },
  {
    question:   "Wie heißt der Protagonist in 'Fahrenheit 451', der ein Feuerwehrmann ist und Bücher verbrennt?",
    response_1: "John Smith",
    response_2: "Guy Montag",
    response_3: "Winston Smith",
    response_4: "Rick Deckard",
    solution: 2,
  },
  {
    question: "In welchem dystopischen Roman wird der Begriff 'Big Brother is watching you' verwendet?",
    response_1: "Schöne Neue Welt",
    response_2: "Fahrenheit 451",
    response_3: "1984",
    response_4: "Träumen Androiden von Elektrischen Schafen",
    solution: 3,
  },
  {
    question: "Welcher dystopische Roman wurde von Aldous Huxley geschrieben?",
    response_1: "Schöne Neue Welt",
    response_2: "Fahrenheit 451",
    response_3: "1984",
    response_4: "Träumen Androiden von Elektrischen Schafen",
    solution: 1,
  },
  {
    question:"In welcher dystopischen Gesellschaft hat das Lesen und der Besitz von Büchern verheerende Konsequenzen?",
    response_1: "Schöne Neue Welt",
    response_2: "Fahrenheit 451",
    response_3: "1984",
    response_4: "Träumen Androiden von Elektrischen Schafen",
    solution: 2,
  },
  {
    question:   "Wie heißt der Totalitarismus-Parteiführer in '1984'?",
    response_1: "Big Brother",
    response_2: "Mustapha Mond",
    response_3: "Hermann Müller",
    response_4: "Emperor Ming",
    solution: 1,
  },
  {
    question:   "Welcher dystopische Roman spielt in einer Zukunft, in der die Menschen durch Drogen und Unterhaltung kontrolliert werden?",
    response_1: "Schöne Neue Welt",
    response_2: "Fahrenheit 451",
    response_3: "1984",
    response_4: "Träumen Androiden von Elektrischen Schafen",
    solution: 1,
  },
  {
    question:   "In welchem dystopischen Roman ist die Hauptfigur ein Feuerwehrmann, der Bücher verbrennt, anstatt Brände zu löschen?",
    response_1: "Schöne Neue Welt",
    response_2: "Fahrenheit 451",
    response_3: "1984",
    response_4: "Träumen Androiden von Elektrischen Schafen",
    solution: 2,
  },
  {
    question:   "Welcher Autor schrieb den Roman '1984'?",
    response_1: "George Orwell",
    response_2: "Ray Bradbury",
    response_3: "Aldous Huxley",
    response_4: "Philip K. Dick",
    solution: 1,
  },
  {
    question:   "In welchem Buch werden Menschen in der Gesellschaft durch die Einnahme von Soma glücklich gemacht und Konflikte werden vermieden?",
    response_1: "Schöne Neue Welt",
    response_2: "Fahrenheit 451",
    response_3: "1984",
    response_4: "Träumen Androiden von Elektrischen Schafen",
    solution: 1,
  },
];

let currentQuestion = 0;

function init() {
  setTotalQuestions();
  showQuestion();
  showResponses();
  
  
}


function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('question-text').innerHTML = question["question"];
    
    
}

function showResponses(){
    let question = questions[currentQuestion];
        for (let i = 1; i < 5; i++) {
        let response = document.getElementById(`answer_${i}`);
        response.innerHTML = question[`response_${i}`];         
    }
}


function setTotalQuestions() {
  let length = questions.length;
  let total = document.getElementById("total_questions");
  total.innerHTML = /*html*/ `
   ${length}
   `;
}
