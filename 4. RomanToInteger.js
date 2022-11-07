const dir = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  D: 500,
  M: 1000,
};
function romanToInteger(rom) {
  let value = 0;
  let roman = rom.toUpperCase();
  for (let i = 0; i < roman.length; i++) {
    let character = roman.charAt(i);
    if (!dir.hasOwnProperty(character)) {
      return "Enter the correct Roman Number";
    }
    value += dir[character];
  }
  return value;
}
console.log(romanToInteger("12"));
