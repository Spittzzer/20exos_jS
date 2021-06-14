//ex 1

let firstVar = "Bilel";
let secondVar = "Aoun";
[firstVar, secondVar] = [secondVar, firstVar];
console.log(firstVar, secondVar);

//ex2 consigne pas claire mais j'essaie qd mm
const Nom = "toto";
const Age = 30;
const Homme = true;

console.log(Nom, Age, Homme);
// ex 3
function powerOfTwo(num) {
  return Math.pow(2, num);
}
console.log(powerOfTwo(2));
// ex4
function addNum(a, b) {
  return a + b;
}
console.log(addNum(5, 6));

//ex5
function convertToSecs(num) {
  return num * 60;
}
console.log(convertToSecs(2));
//ex6
function incrementByOne(num) {
  return num + 1;
}
console.log(incrementByOne(5));
//ex7
function calcSurface(base, hauteur) {
  return (base * hauteur) / 2;
}
console.log(calcSurface(5, 8));

//ex8
function reverString(string) {
  return string.split("").reverse().join("");
}
console.log(reverString("hello there"));
//ex9
function getMax(a, b, c) {
  return Math.max(a, b, c);
}
console.log(getMax(8, 6, 12));
// ex10
function firstArr(arr) {
  return arr[0];
}
console.log(firstArr([2, 6, 5, 4, 7, 8]));

//ex 11
function getURL() {
  return window.location.href;
}
console.log(getURL());

//ex12
function getRemain(a, b) {
  return a % b;
}
console.log(getRemain(5, 3));

//ex13
function isLessThanHundred(a, b) {
  return a + b < 100 ? true : false;
}
console.log(isLessThanHundred(98, 65));

//ex14
function convertHoursToSecs(hours) {
  return hours * 3600;
}
console.log(convertHoursToSecs(6));

//ex15
function isLessThanZero(number) {
  return number < 0 ? true : false;
}
console.log(isLessThanZero(5));

//ex 16
function equal(a, b) {
  return a === b ? true : false;
}
console.log(equal(12, 12));
//ex17
function diviByFive(num) {
  return num % 5 === 0;
}
console.log(diviByFive(10));
//ex18
function convertHoursAndMinutes(hours, mins) {
  return hours * 3600 + mins * 60;
}
console.log(convertHoursAndMinutes(2, 16));

//ex19
function reverse(array) {
  var output = [];
  while (array.length) {
    output.push(array.pop());
  }

  return output;
}
console.log(reverse(["o", "l", "l", "e", "h"]));

//ex20
function lastEl(arr) {
  return arr[arr.length - 1];
}
console.log(lastEl([5, 6, 7, "hey"]));

//ex21
function checkTypeAndValue(a, b) {
  return a === b;
}
console.log(checkTypeAndValue(2, "2"));

//ex22
function checkIfEmpty(arr) {
  return arr.length === 0 ? true : false;
}
console.log(checkIfEmpty([" "]));
