function sum(...args) {
    // Начальное значение суммы — 0
    let result = 0;

    // Перебираем все переданные аргументы
    for (const arg of args) {
        // Пробуем привести аргумент к числу
        const number = Number(arg);

        // Проверяем, что результат — не NaN
        // (то есть значение можно привести к числу)
        if (!Number.isNaN(number)) {
        result += number;
        }
    }

    // Возвращаем итоговую сумму
    return result;
}



console.log(
    sum(1, 2, 3, 4, 5, 6),
); // 21

console.log(
    sum(-10, 15, 100),
); // 105

console.log(
    sum(),
); // 0

console.log(
    sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false),
); // 11
