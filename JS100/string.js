1.
str = "These aren't the droids you're looking for.";
console.log(str.length);
// 43

2.
str = 'confetti floating everywhere';
str.toUpperCase();

3.
function repeat(n, str) {
    let i = 1;
    let rep = '';

    while (i <= n) {
        rep += str;
        i += 1;
    }
    return rep;
}

4.
str = "A pirate I was meant to be!\nTrim the sails and roam the sea!"

5.
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

string1.toLowerCase() === string2.toLowerCase();
string1.toLowerCase() === string3.toLowerCase();

6.
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
byteSequence.includes('x');

7.
function isBlank (str) {
    return str.length === 0;
}

8.
function isBlank(str) {
    return str.toUpperCase() === str.toLowerCase();
}

9.
let str = 'launch school tech & talk';
let newstr = str.split(' ').map(x => x.substring(0,1).toUpperCase() + x.substring(1,x.length)).join(' ');
console.log(newstr);