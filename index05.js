function getStringCount(object) {
  let count = 0;
  for (const key in object) {
    if (typeof object[key] === 'string') {
      count++;
    }
    else if (typeof object[key] === 'object' && object[key] !== null) {
      count += getStringCount(object[key]);
    }
  }   
  return count;

}