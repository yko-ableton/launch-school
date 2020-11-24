/* eslint no-constant-condition: ["error", { "checkLoops": false }] */

const readline = require('readline-sync');

const WINNING_OPTIONS = {
  rock: ['scissors', 'lizard'], lizard: ['spock', 'paper'], spock: ['rock', 'scissors'], scissors: ['lizard', 'paper'], paper: ['spock', 'rock'],
};

const validChoices = Object.keys(WINNING_OPTIONS);

const validChoicesFirstLetter = validChoices.map((validChoice) => validChoice[0]).join(',');

function prompt(message) {
  console.log(`=> ${message}`);
}

function returnComputerChoice() {
  const randomIndex = Math.floor(Math.random() * validChoices.length);
  const computerChoice = validChoices[randomIndex];
  return computerChoice;
}

function compare(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 0;
  } if (WINNING_OPTIONS[userChoice].includes(computerChoice)) {
    return 1;
  }
  return -1;
}

prompt('------- Rock Paper Scissors Spock Lizard -------');

function main() {
  let compPoint = 0;
  let userPoint = 0;

  while (compPoint < 5 && userPoint < 5) {
    prompt(`Choose one: ${validChoices.join(', ')}`);
    let choice = readline.question().toLowerCase();

    while (!validChoices.includes(choice) && !validChoicesFirstLetter.includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }

    let operation;

    switch (choice) {
      case 's':
        prompt('Did you mean 1) Scissors or 2) Spock?');
        operation = readline.question();

        while (!['1', '2'].includes(operation)) {
          prompt('Must choose 1 or 2');
          operation = readline.question();
        }

        switch (operation) {
          case '1':
            choice = 'scissors';
            break;
          case '2':
            choice = 'spock';
            break;
          default:
        }
        break;
      case 'r':
        choice = 'rock';
        break;
      case 'l':
        choice = 'lizard';
        break;
      case 'p':
        choice = 'paper';
        break;
      default:
    }

    const computerChoice = returnComputerChoice();

    prompt(`You chose ${choice} & Computer chose ${computerChoice}`);

    const point = compare(choice, computerChoice);

    if (point === 0) {
      prompt("It's a tie!");
      prompt('Current Standing');
      prompt(`You: ${userPoint} points | Computer: ${compPoint} points`);
    } else if (point === 1) {
      userPoint += 1;
      prompt('You win!');
      prompt('Current Standing');
      prompt(`You: ${userPoint} points | Computer: ${compPoint} points`);
    } else {
      compPoint += 1;
      prompt('You lose :(');
      prompt('Current Standing');
      prompt(`You: ${userPoint} points | Computer: ${compPoint} points`);
    }
  }

  prompt('------- Summary -------');
  if (userPoint === 5) {
    prompt('You are the winner! Congratulations');
  } else {
    prompt('You have lost. Next time!');
  }
  prompt('-----------------------');

  prompt('Play again? (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt('Please enter y or n.');
    answer = readline.question().toLowerCase();
  }

  if (answer === 'y') {
    console.clear();
    main();
  } else {
    prompt('Thank you!');
  }
}

main();
