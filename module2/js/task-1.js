/* eslint-disable func-names */
const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1}-`, array[i]);
  }
};
const words = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
logItems(words);
logItems(numbers);
