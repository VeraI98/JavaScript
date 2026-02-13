const getDaysBetweenDates = (...dates) => {


    // Если аргументов меньше двух — выбрасываем ошибку
    if (dates.length < 2) {
        throw new TypeError('Two arguments required');
    }

    // Преобразуем входные значения в объекты Date
    const date1 = new Date(dates[0]);
    const date2 = new Date(dates[1]);

    // Проверяем валидность дат getTime() у невалидной даты возвращает NaN
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        return NaN;
    }

    // Получаем разницу во времени в миллисекундах
    const diffMs = Math.abs(date2 - date1);

    // Количество миллисекунд в одном дне
    const MS_PER_DAY = 24 * 60 * 60 * 1000;

    // Возвращаем количество полных дней
    return Math.floor(diffMs / MS_PER_DAY);
};

export default getDaysBetweenDates;

console.log(getDaysBetweenDates('2023-01-01', '2023-01-31')); // 30
console.log(getDaysBetweenDates('2023-02-01', '2023-01-01')); // 31
console.log(getDaysBetweenDates('invalid-date', '2023-01-01')); // NaN