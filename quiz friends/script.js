// Structure des questions : questions plus choix + réponses
class Question {
  constructor(text, choices, answer) {
    this.text = text; //énoncé
    this.choices = choices; //choix proposés
    this.answer = answer; //réponses
  }
  isCorrectAnswer(choice) {
    return this.answer === choice; // Pour savoir si le choix est juste
  }
}

// Tableaux avec les questions
let questions = [
  new Question("Qui prononce les premiers mots de la série?", ["Monica", "Chandler", "Phoebe", "Ross"], "Monica"),
  new Question("Quel est le nom du café où ils se retrouvent ?", ["Central Presk", "Central Perk", "Central Berl", "Centrale Perk"], "Central Perk"),
  new Question("Comment s'appelle le colocataire psychotique de Chandler?", ["Eddie Donque", "Elon Musk", "Just Leblanc", "Eddie Menuek"], "Eddie Menuek"),
  new Question("Pour qui Rachel ressort-elle sa tenue de cheerleader? ", ["José", "Joseph", "Joshua", "Gunther"], "Joshua"),
  new Question("Comment s'appelle l'homme qui permet à Julie d'oublier Ross ?", ["Russ", "David", "Gavin", "Janice"], "Russ"),
  new Question("Comment s'appelle la grand-mère de Ross et Monica qui décède dans la première saison ?", ["Athena", "Mauricette", "Germaine", "Althea"], "Althea"),
  new Question("Comment se nomment les triplés de Frank Jr ?", [" Ross, Rachel et Chandler", "LeHulk, Lesly et Phoebe Jr", "Franck Jr Jr, Leslie et Chandler", "Alvin, Simon et Théoodre"], "Franck Jr Jr, Leslie et Chandler"),
  new Question("Qui aide Ross à monter le canapé ?", ["Rachel et Chandler", "Phoebe et Monica", "Monica et Chandler", "Joey et Monica"], "Rachel et Chandler"),
  new Question("Combien Joey a-t-il de soeurs", ["8", "6", "2", "7"], "7"),
  new Question("Qu'offre M.Geller à Monica pour compenser la perte de ses souvenirs ?", ["Sa Porsche", "Sa montre", "Une pièce de monnaie", "Une maison de poupées"], "Sa Porsche"),
  new Question("Quel est l'ancien métier de Mike ?", ["Comptable", "Developateur", "Avocat", "Juge"], "Avocat"),
  new Question("Pour quel rôle Estelle appelle-t-elle Joey quand il commence Mac & C.H.E.E.S.E ?", ["Le frère de Drake Ramoray", "Un boxeur gay", "Son rôle actuel", "Serveur dans un bar"], "son rôle actuel"),
  new Question("Combien de fois Ross s'est-il fiancé ? ", ["2", "4", "3", "1"], "2"),
  new Question("Dans quel jeu télévisé Joey est-il invité ?", ["Les chiffres et les lettres", "Pyramide", "Qui est qui?", "Le juste prix"], "Pyramide"),
  new Question("Quel est le métier de la mère de Chandler ?", ["Meneuse de revue dans un cabaret", "Romancière érotique", "Docteur", "Mère au foyer"], "Romancière érotique"),
  new Question("Comment se nomment les soeurs de Rachel ?", ["Annie et Jil", "Amy et Karen", "Amy et Jil", "Jil et Karine"], "Amy et Jil"),
  new Question("Où chandler est-iil muté?", ["Tulsa", "Phoenix", "Atlanta", "Paris"], "Tulsa"),
  new Question("Quelle est la plus grande peur de Rachel ?", ["Les tarentules", "Les pigeons", "Les balançoires", "Les poissons"], "Les poissons"),
  new Question("De quel acteur Joey doit-il être la doublure de fesses ?", ["Marlon Brando", "Robert DeNiro", "Al Pacino", "Charlton Eston"], "Al Pacino"),
  new Question("Qui prononce les derniers mots de la série ?", ["Monica", "Ross", "Rachel", "Chandler"], "Chandler"),
];

//console.log(questions);

// Pour faire dérouler les questions
class Quiz {
  constructor(questions) {
    this.score = 0; // Pour compter les bonnes réponses
    this.questions = questions; // Les questions
    this.currentQuestionIndex = 0; // La question de départ
  }
  getCurrentQuestion() { // La question actuelle 
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer) { // Check la réponse choisie
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) { // Si le choix === reponse est true on score + 1 
      this.score++;
    }
    this.currentQuestionIndex++; // Passer à la question suivante
  }
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length; // Si l'index de la question est > au nombre de questions c'est fini
  }
}

const display = {
  elementShown: function (id, text) { // Dynamisme des questions....
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  endQuiz: function () { // Ce qui se passe quand les 20 questions sont passées
    endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
    this.elementShown("quiz", endQuizHTML);
  },
  question: function () {
    this.elementShown("question", quiz.getCurrentQuestion().text);
  },
  choices: function () {
    let choices = quiz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function () {
        quiz.guess(guess);
        quizApp();
      }
    }

    for (let i = 0; i < choices.length; i++) { // display choices and handle guess
      this.elementShown("choice" + i, choices[i]);
      guessHandler("guess" + i, choices[i]);
    }
  },
  progress: function () {
    let currentQuestionNumber = quiz.currentQuestionIndex + 1; // Numero de la question : index+1 car l'index est à 0 :-)
    this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
  },
};

quizApp = () => {
  if (quiz.hasEnded()) { // Si le jeu est terminé : fini
    display.endQuiz();
  } else { // Sinon on continue l'affichage
    display.question();
    display.choices();
    display.progress();
  }
}

let quiz = new Quiz(questions); // Creation du Quiz
quizApp();

//console.log(quiz);