/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
'use strict';

let userPoints = 0;

alert('WELCOME TO GUESS ABOUT ME GAME ');
let userName = prompt('What is Your name ? ');
const uname = function (userName) {
  alert('HELLO ' + userName + ' !');
  // console.log('my name is Mousa , ' + 'HELLO ' + userName+ ' !');
};

uname(userName);


let myJob = prompt('Am I an electrical engineer?');
const job = function (myJob) {
  while (myJob.toLowerCase() !== 'no' && myJob.toLowerCase() !== 'yes' && myJob.toLowerCase() !== 'n' && myJob.toLowerCase() !== 'y') {
    myJob = prompt('Am I an  Engineer?');
  }
  if (myJob.toLowerCase() === 'yes' || myJob.toLowerCase() === 'y') {
    // console.log('You\'re right, I am an Electrical Power Engineer . Well done ^.^');
    alert('You\'re right, I am an Electrical Power Engineer . Well done ^.^');
    userPoints++;
  } else {
    // console.log('You are wrong , I am an Electrical Power Engineer ');
    alert('You are wrong , I am an Electrical Power Engineer ');

  }

};

job(myJob);




let movies = prompt('Do you think I like Movies? yes/no');
const myMovies = function (movies) {
  while (movies.toLowerCase() !== 'no' && movies.toLowerCase() !== 'yes' && movies.toLowerCase() !== 'n' && movies.toLowerCase() !== 'y') {
    movies = prompt('Do you think I like Movies? yes/no');
  }
  if (movies.toLowerCase() === 'yes' || movies.toLowerCase() === 'y') {
    // console.log('You\'re right, I like watching movies. Well done ^.^');
    alert('You\'re right, I like watching movies. Well done ^.^');
    userPoints++;
  } else {
    // console.log('I\'m sorry I really love watching movies Good luck with your next questions.');
    alert('I\'m sorry I really love watching movies Good luck with your next questions.');
  }
};
myMovies(movies);

let gamerOrNot = prompt('Do you think I like Video Games? yes/no');
const gamer = function (gamerOrNot) {
  while ((gamerOrNot.toLowerCase() !== 'no') && (gamerOrNot.toLowerCase() !== 'yes') && (gamerOrNot.toLowerCase() !== 'n') && (gamerOrNot.toLowerCase() !== 'y')) {
    gamerOrNot = prompt('Do you think I like Video Games? yes/no');
  }
  if (gamerOrNot.toLowerCase() === 'yes' || gamerOrNot.toLowerCase() === 'y') {
    // console.log('You\'re right, I am a gamer , i play "league of legends" ');
    alert('You\'re right, I am a gamer , i play "league of legends" ');
    userPoints++;
  } else {
    // console.log('WRONG !');
    alert('WRONG !');
  }
};
gamer(gamerOrNot);

let drinkTea = prompt('Am I a Tea lover? no/yes');
const loveTea = function (drinkTea) {
  while (drinkTea.toLowerCase() !== 'no' && drinkTea.toLowerCase() !== 'yes' && drinkTea.toLowerCase() !== 'n' && drinkTea.toLowerCase() !== 'y') {
    drinkTea = prompt('Am I a Tea lover? no/yes');
  }
  if (drinkTea.toLowerCase() === 'yes' || drinkTea.toLowerCase() === 'y') {
    // console.log('NOPE ! .. Iam a Coffee lover , i drink tea sometime');
    alert('NOPE ! .. Iam a Coffee lover , i drink tea sometime');
  } else {
    // console.log('You\r right ... I am not a tea lover ');
    alert('You\r right ... I am not a tea lover ');
    userPoints++;
  }
};

loveTea(drinkTea);

let finalQuestion = prompt('Do you think I\'ll be a Great software developer? yes/no');
const final = function (finalQuestion) {
  while (finalQuestion.toLowerCase() !== 'no' && finalQuestion.toLowerCase() !== 'yes' && finalQuestion.toLowerCase() !== 'n' && finalQuestion.toLowerCase() !== 'y') {
    finalQuestion = prompt('Do you think I\'ll be a Great software developer? yes/no');
  }
  if (finalQuestion.toLowerCase() === 'yes' || finalQuestion.toLowerCase() === 'y') {
    // console.log('Thank you so much for that <3 ');
    alert('Thank you so much for that <3 ');
    userPoints++;
  } else {
    // console.log('we will see :)');
    alert('we will see :)');

  }

};

let guessNumber = prompt('Guess what is the number in my mind , its between 0 ---> 100 , try ill help you');
const Num = function (guessNumber) {

  let soul = 3;
  do {

    if (guessNumber > '74') {
      guessNumber = prompt('TOO HIGH  , try again don\'t forget between 0-------->100 you still have  ' + soul + ' attempts');
    } else if (guessNumber < '74') {
      guessNumber = prompt('TOO LOW, try again don\'t forget between 0-------->100  you still have  ' + soul + ' attempts');
    } else {
      break;
    }
    soul--;
  } while (!(guessNumber === '74' || soul === 0));

  if (guessNumber === '74') {
    alert('GREAT JOB !');
    userPoints++;
  } else {
    alert('SORRY :( , All attempts have been exhausted , the correct number was 74');
  }

};
Num(guessNumber);

let myColor = prompt('guess  my favorite  colors ! you must guess at least 2 colors of my four favorite colors to git a point ');

let colors = ['black', 'grey', 'red', 'blue'];
let answers = 0;
let attempts = 5;
const fColor = function (myColor) {
  while (attempts > 0) {

    for (let i = 0; i < 4; i++) {
      if (myColor === colors[i]) {
        answers++;
        alert('Correct the ' + myColor + ' is one of them');

      }



    }
    myColor = prompt('TRY again ,guess my favorite colors !');
    attempts--;
  }

};
fColor(myColor);
alert('You found ' + answers + ' of my favorite colors');
if (answers > 2) {
  userPoints++;
}
alert('My favorite Color is ' + colors);

alert('Welcome Again  ' + userName + ' ,Your score : ' + userPoints + '/7');
document.write('YOUR SCORE IN THIS GAME ' + '<b>' + userPoints + '</b>' + '/7' + ' Point');
console.log(userPoints);
