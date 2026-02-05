function unique(arr) {
  // Создаём Set, который автоматически хранит только уникальные значения
    const set = new Set();

  // Результирующий массив, который мы вернём
    const result = [];

    // Проходимся по исходному массиву
    for (const item of arr) {
        // Если такого значения ещё нет в Set
        if (!set.has(item)) {
        // Добавляем значение в Set
        set.add(item);

        // И сохраняем его в результат, сохраняя порядок
        result.push(item);
        }
    }

    // Возвращаем новый массив с уникальными значениями
    return result;
}


const data1 = [1, 2, 3, 3, 4, 4]; 
console.log(unique(data1)); // [1, 2, 3, 4] 

const obj = { name: 'John' }; 
const data2 = [obj, obj, obj, { name: 'John' }]; 
const result = unique(data2); 
console.log(result); // [{ name: 'John' }, { name: 'John' }] 

console.log(result[0] === obj); // true 
console.log(result[1] === obj); // false