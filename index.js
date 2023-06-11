var readlineSync = require("readline-sync");

var score = 0;

var userAnswer = readlineSync.question("please enter your name?   ");

console.log("\n 1. welcome  " + userAnswer + "😃!!!  to the exclusive ZNMD Quiz! \n \n 2. Rules: please enter the correct option a b c d only in lowercase letters, +1 for correct -1 for incorrect \n \n 3. Quiz starts now🥳, Question one given below👇 \n ")



function play(question, answer) {
  var gameAnswer = readlineSync.question(question);
  if (gameAnswer === answer) {
    score = score + 1;
    console.log("Right🤩");

  } else {
    score = score - 1;
    console.log("wrong🤪");
  }
  console.log("correct answer is " + answer);
  console.log("your current score is " + score)
  console.log("-------------------" + "\n");
}

var questionOne = {
  question: "what did Kabir Dewan do for a living? \n a. he was an architect \n b. professional photographer \n c. managed his family construction business \n d. did not work \n   ",
  answer: "c",
}

var questionTwo = {

  question: "2. Who was the ingenious teacher in 'eschool' who was the  mastermind behind inventing the term 'bwoys'? \n a. Mr Duggal \n b. Mr Dave \n c. Mr Dubey \n d. Mr Hussain\n  ",
  answer: "c",
}

var questionThree = {
  question: "3. Remember Bagwati was worth €12,000 but which of these luxury fashion houses did Bagwati belong to?  \n a. Hermes \n b. louis vuitton \n c. Zara \n d. Gucci\n    ",
  answer: "a",
}

var questionFour = {
  question: "4. Which adventurous activity do the buoys have planned in Costa Brava? \n a. Tomatina Fest \n b. Deep Sea Diving \n c. Sky Diving \n d. The Bull Race\n   ",
  answer: "b",
}

var questionFive = {
  question: "5. They sang a jingle that imraan wrote for a biscuit company. What were the biscuits called? \n a. Diamond \n b. Almond \n c. Priya Gold \n d. Parle G\n     ",
  answer: "a",
}

var questionSix = {
  question: "6. Who was the girl who rejected Arjuns wedding proposal? \n a. Laila \n b. kookki \n c. sophia \n d. sonia \n     ",
  answer: "b",
}

var questionSeven = {
  question: "7. Imraan found a girl and fell in love with her during their life-changing trip, what was her name? \n a. Nuria \n b. Nancy \n c. Nora \n d. Nicole \n     ",
  answer: "a",
}

var questionEight = {
  question: "8. Out of the four people, who was the first one to jump from the plane? \n a. Arjun \n b. kabir \n c. imraan \n d. the blonde stranger \n     ",
  answer: "d",
}

var questionNine = {
  question: "9. What was Arjun's girlfriend's name for whom Imraan broke the bro code which led to the big fight? \n a. Sonali \n b. Laila \n c. Nuria \n d. Nora \n     ",
  answer: "a",
}

var questionTen = {
  question: "10. What song did natasha and the trio sing in the car? \n a. I'm a smart chick in this blonde filled world  \n b. I'm a hot chick in this rock and roll world  \n c. I'm on a highway to hell  \n d. I'm a rock chick in a hard rock world  \n     ",
  answer: "d",
}

// play(questionOne.question,questionOne.answer)
// play(questionTwo.question,questionTwo.answer)
// play(questionThree.question,questionThree.answer)
// play(questionFour.question,questionFour.answer)
// play(questionFive.question,questionFive.answer)
// play(questionSix.question,questionSix.answer)
// play(questionSeven.question,questionSeven.answer)
// play(questionEight.question,questionEight.answer)
// play(questionNine.question,questionNine.answer)
// play(questionTen.question,questionTen.answer)

var myArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

for (var i = 0; i < myArray.length; i++) {
  var currentArray = myArray[i];
  play(currentArray.question, currentArray.answer);
}



console.log("well done!!! your score is: " + score + " out of 10")
console.log("Check out the high scores: \n Atish: 8,\n Raj: 7, \nif you have beaten/matched the High Score please message me the Screenshot and i will update it, Bye 😎 ")

