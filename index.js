function compactAndGroup(numbers) {
  const result = {
    even: [],
    odd: []
  };

  for (let num of numbers) {

    if (!num && num !== 0) continue; 
    if (typeof num !== "number" || isNaN(num)) continue;
    if (num % 2 === 0) {
      result.even.push(num);
    } else {
      result.odd.push(num);
    }
  }

  return result;
}

console.log(compactAndGroup([1, 2, 0, 3, null, 8, undefined, 5, NaN]));