// Reversing an Integer in JavaScript

let integer = 12345;

const reverseInteger = (integer) => {
    let reverse = 0;
    while (integer > 0) {
        reverse = (reverse * 10) + (integer % 10);
        integer = Math.floor(integer / 10);

    }
    return reverse;
}

reverseInteger(integer);    // 54321
