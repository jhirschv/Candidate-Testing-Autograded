const input = require("readline-sync");

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";

let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? ",
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  candidateName = input.question("What is your name? ");
  return candidateName;
}

function askQuestion() {
  questions.forEach((question) => {
    let answer = input.question(question);
    candidateAnswers.push(answer);
    console.log(candidateAnswers);
  });
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let correct = 0;

  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      correct++;
    }
  }
  let grade = (correct / 5) * 100;
  let passed = "";
  if (grade < 80) {
    passed = "FAILED";
  } else {
    passed = "PASSED";
  }
  //TODO 3.2 use this variable to calculate the candidates score.
  return {grade, correct, passed}
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello " + candidateName + "!");
  askQuestion();
  let { grade, correct, passed } = gradeQuiz(candidateAnswers);
  console.log(`Overall Grade: ${grade} (${correct} of 5 responses correct)`);
  console.log(`Status: ${passed}`);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram,
};
