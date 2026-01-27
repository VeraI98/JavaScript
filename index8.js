function getField(arrayOfObjects, key) {
    if (!Array.isArray(arrayOfObjects)) {
        return [];
    }

    return arrayOfObjects.map(obj => obj[key]);
}


const data = [
    {
        name: 'Denis',
        age: 25,
    },
    {
        name: 'Ivan',
    },
    {
        name: 'Ann',
        age: 18,
    },
    ];

console.log(getField(data, 'age'));
// [25, undefined, 18]