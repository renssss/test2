const numbers = [1, 2, 3, 4, 5, 6];

console.log(separateArray(numbers));
// должен вернуть { even: [2, 4, 6], odd: [1, 3, 5] }

function separateArray(array) {
  // Ваш код здесь
  const even = [], odd = [];
  array.forEach((item) => item % 2 ? odd.push(item) : even.push(item)); 
  return {even, odd};
}
