function filterAndCreate(arr) {
  const filterArr = arr.filter(num => num > 10);
  const multipliedArr = filterArr.map(num => num * 2);
  
  console.log("Отфильтрованный массив:", filterArr);
  console.log("Преобразованный массив", multipliedArr);
}

filterAndCreate([12, 5, 8, 130, 44, 3, 19]);