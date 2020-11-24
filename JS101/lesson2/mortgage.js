const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return (Number.isNaN(parseFloat(number)) && !Number.isFinite(number)) || number.trimStart() === '';
}

function positiveCheck(number) {
  return number < 0;
}

function toDecimal(number) {
  return Math.round(number * 100) / 100;
}

function percentageCheck(number) {
  if (number > 1) {
    return (number / 100) / 12;
  }
  return number / 12;
}

function mortgageCalculation(loanAmount, apr, loanDurationM) {
  const monthPayment = loanAmount * (apr / (1 - ((1 + apr) ** -loanDurationM)));
  const totalPayment = monthPayment * loanDurationM;
  const totalInterest = totalPayment - loanAmount;
  return [monthPayment, totalPayment, totalInterest];
}

prompt('------- Mortgage Calculator -------');
prompt('The currency is outputted in $, but the calculator can be used with any currency.');

function mortgageCalculator() {
  prompt('What is the loan amount?');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount) || positiveCheck(loanAmount)) {
    prompt('Please enter a valid positive number without the currency sign.');
    loanAmount = readline.question();
  }

  prompt('What is the Annual Percentage Rate?');
  let apr = readline.question();

  while (invalidNumber(apr) || positiveCheck(apr)) {
    prompt('Please enter a valid positive number without the percentage sign.');
    apr = readline.question();
  }

  apr = percentageCheck(apr);

  prompt('Is your loan duration 1) In months? 2) In years?');
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
      while (invalidNumber(loanDurationM) || positiveCheck(loanDurationM)) {
        prompt('Please enter a valid positive number.');
        loanDurationM = readline.question();
      }
      break;
    case '2':
      prompt('What is your loan duration in years?');
      loanDurationY = readline.question();
      while (invalidNumber(loanDurationY) || positiveCheck(loanDurationY)) {
        prompt('Please enter a valid positive number.');
        loanDurationY = readline.question();
      }
      loanDurationM = loanDurationY * 12;
      break;
    default:
  }

  const [monthPayment, totalPayment, totalInterest] = mortgageCalculation();

  prompt('------- Summary -------');
  prompt(`Payment every month: $${toDecimal(monthPayment)}`);
  prompt(`Total of ${loanDurationM} monthly payments: $${toDecimal(totalPayment)}`);
  prompt(`Total Interest: $${toDecimal(totalInterest)}`);
  prompt('-----------------------');

  prompt('Calculate again? (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt('Please enter y or n.');
    answer = readline.question().toLowerCase();
  }

  if (answer === 'y') {
    console.clear();
    mortgageCalculator();
  } else {
    prompt('Thank you!');
  }
}

mortgageCalculator();
