/* eslint-env node */

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return (isNaN(parseFloat(number)) && !isFinite(number)) || number.trimStart() === '';
}

function twoDecimal(number) {
  return Math.round(number * 100) / 100
}

prompt('------- Mortgage Calculator -------');
prompt('The currency is outputted in $, but the calculator can be used with any currency.');

function mortgageCalculator() {
  prompt("What is the loan amount?");
  let loanAmount = readline.question();
  
  while (invalidNumber(loanAmount)) {
    prompt("Please enter a valid number without the currency sign.");
    loanAmount = readline.question();
  }
  
  prompt("What is the Annual Percentage Rate?");
  let apr = readline.question();
  
  while (invalidNumber(apr)) {
    prompt("Please enter a valid number without the percentage sign.");
    apr = readline.question();
  }
  
  if (apr > 1) {
    apr = (apr / 100) / 12;
  } else {
    apr = apr / 12;
  }
  
  prompt("Is your loan duration 1) In months? 2) In years?");
  let operation = readline.question();
  
  while (!['1', '2'].includes(operation)) {
    prompt('Must choose 1 or 2');
    operation = readline.question();
  }
  
  let loanDurationM;
  let loanDurationY;
  switch (operation) {
    case '1':
      prompt('What is your loan duration in months?');
      loanDurationM = readline.question();
      while (invalidNumber(loanDurationM)) {
        prompt("Please enter a valid number.");
        loanDurationM = readline.question();
      }
      break;
    case '2':
      prompt('What is your loan duration in years?');
      loanDurationY = readline.question();
      while (invalidNumber(loanDurationY)) {
        prompt("Please enter a valid number.");
        loanDurationY = readline.question();
      }
      loanDurationM = loanDurationY * 12;
      break;
  }
  
  let monthPayment = loanAmount * (apr) / (1 - Math.pow((1 + apr), (-loanDurationM)));
  let totalPayment = monthPayment * loanDurationM
  let totalInterest = totalPayment - loanAmount
  
  prompt('------- Summary -------');
  prompt(`Payment every month: $${twoDecimal(monthPayment)}`);
  prompt(`Total of ${loanDurationM} monthly payments: $${twoDecimal(totalPayment)}`);
  prompt(`Total Interest: $${twoDecimal(totalInterest)}`);
  prompt('-----------------------');

  prompt('Calculate again? (y/n)');
  let answer = readline.question().toLocaleLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt('Please enter y or n.');
    answer = readline.question().toLocaleLowerCase();
  }

  if (answer === 'y') {
    mortgageCalculator();
  } else {
    prompt('Thank you!');
    return;
  }
}

mortgageCalculator();