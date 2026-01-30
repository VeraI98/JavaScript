/* function lettersCount(str) {
    const result = {};

    for (const char of str.toLowerCase()) {
        result[char] = (result[char] || 0) + 1;
    }

    return result;
}

console.log(lettersCount('aAAbbccde')); */

// {
//    a: 3,
//    b: 2,
//    c: 2,
//    d: 1,
//    e: 1,
// }



/*
function invert(obj) {
    const result = {};

    // Перебираем все ключи исходного объекта
    for (const key in obj) {
        // Берём значение по текущему ключу
        const value = obj[key];

        // В новом объекте: значение становится ключом,а ключ значением
        result[value] = key;
    }

    return result;
}


console.log(invert({ a: 1, b: 2, c: 3 }));
// { 1: 'a', 2: 'b', 3: 'c' }

console.log(invert({ a: 1, b: 1, c: 2 }));*/
// { 1: 'b', 2: 'c' }





function deepEqual(obj1, obj2) {
    // Если значения строго равны — объекты равны
    if (obj1 === obj2) {
        return true;
    }

    // Если один из аргументов не объект
    // или равен null — они не равны
    if (
        typeof obj1 !== 'object' || obj1 === null ||
        typeof obj2 !== 'object' || obj2 === null
    ) {
        return false;
    }

    // Получаем массивы ключей обоих объектов
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Если количество ключей разное — объекты не равны
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Проверяем каждый ключ первого объекта
    for (const key of keys1) {
        // Если во втором объекте нет такого ключа — не равны
        if (!keys2.includes(key)) {
        return false;
        }

        // Рекурсивно сравниваем значения по этому ключу
        if (!deepEqual(obj1[key], obj2[key])) {
        return false;
        }
    }

    // Если все проверки пройдены — объекты равны
    return true;
}

deepEqual(firstObject, secondObject); // true
deepEqual({ a:1, b: 3 }, { b: 2, a: 1}); // false
deepEqual(1, 2); // false
deepEqual(true, false); // false
