function evenOfOdd (num) {
    if (Number.isInteger(num)) {
        if (num % 2 === 0) {
            console.log('even');
        } else {
            console.log('odd');
        }
    } else {
        console.log('error')
        return;
    }
}