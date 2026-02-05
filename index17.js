function getArraysCounts(arr) {
    // Создаём Map — она умеет хранить ключи любого типа
    // (числа, строки, boolean, объекты и т.д.)
    const result = new Map();

    // Проходимся по каждому элементу массива
    for (const item of arr) {
        // Проверяем: есть ли уже такой ключ в Map
        if (result.has(item)) {
        // Если есть — увеличиваем счётчик на 1
        result.set(item, result.get(item) + 1);
        } else {
        // Если нет — добавляем ключ со значением 1
        result.set(item, 1);
        }
    }

    // Возвращаем Map с подсчитанными значениями
    return result;
}


const obj = { name: 123 };
const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
const counts = getArraysCounts(data); // экземпляр Map

console.log(counts.get(1)); // 3
console.log(counts.get(2)); // 4
console.log(counts.get(true)); // 2
console.log(counts.get(obj)); // 2
