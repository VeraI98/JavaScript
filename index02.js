function sumPositiveNumbers(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumPositiveNumbers([1, -2, 3, 0, -5, 6]));