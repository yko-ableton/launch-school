1.
function sum(num1, num2) {
    return num1 + num2;
}

2. 
function brendanEichQuote() {
    console.log('Always bet on JavaScript.');
}
// it will return undefined

3.
function cite(author, quote) {
    console.log(`${author} said: ${quote}`);
}

4.
function squaredNumber(num) {
    return num ** 2;
}

5.

function multiplesOfThree() {
    let divisor = 1;
  
    for (let dividend = 3; dividend <= 30; dividend += 3) {
      console.log(dividend + ' / ' + divisor + ' = 3');
      divisor += 1;
    }
  }
  
  multiplesOfThree;
// will output nothing, because the function isn't invoked. it should look like: multiplesOfThree();

6. 
function compareByLength(str1, str2) {
    if (str1.length < str2.length) {
        return -1;
    } else if (str1.length > str2.length) {
        return 1;
    } else {
        return 0;
    }
}

7.
'Captain Ruby'.replace('Ruby', 'JavaScript');

8.
function greet(languageCode) {
    switch (languageCode) {
      case 'en': return 'Hi!';
      case 'fr': return 'Salut!';
      case 'pt': return 'Olá!';
      case 'de': return 'Hallo!';
      case 'sv': return 'Hej!';
      case 'af': return 'Haai!';
    }
  }

9.
function extractLanguage(locale) {
    return locale.split('_')[0];
}

10.
function extractRegion(locale) {
    return locale.split('_')[1].split('.')[0];
}

11.
function localGreet(locale) {
    let language = extractLanguage(locale);
    let region = extractRegion(locale);
  
    switch (region) {
      case 'US': return 'Hey!';
      case 'GB': return 'Hello!';
      case 'AU': return 'Howdy!';
      default: return greet(language);
    }
  }