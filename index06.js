function optionalChaining(obj, chain) {
    let current = obj; //Создаём переменную, в которой будем хранить текущее значение

    for (let key of chain) { //Перебираем все ключи из цепочки
        if (current == null) { //Если текущее значение null или undefined, возвращаем undefined
            return undefined;
        }
        current = current[key]; //Обновляем текущее значение, переходя к следующему уровню вложенности
    }

    return current;
}
console.log(optionalChaining({ a: { b: { c: 42 } } }, ['a', 'b', 'c'])); // 42
console.log(optionalChaining({ a: { b: null } }, ['a', 'b', 'c'])); // undefined    