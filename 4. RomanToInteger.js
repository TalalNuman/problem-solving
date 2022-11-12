const dir = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
function romanToInteger(rom) {
  let value = 0;
  let roman = rom.toUpperCase();
  let prev = "";
  const romArr = roman.split("").reverse();
  for (let i = 0; i < romArr.length; i++) {
    let character = romArr[i];
    if (!dir.hasOwnProperty(character)) {
      return "Enter the correct Roman Number";
    }
    if (dir[character] > dir[prev] || prev === "") {
      value += dir[character];
    } else {
      value -= dir[character];
    }
    prev = character;
  }
  return value;
}
console.log(romanToInteger("CMXLIX")); //1551
