function getMostSenior(humans) {
    if (!Array.isArray(humans) || humans.length === 0) {
        return [];
    }

    const maxAge = Math.max(...humans.map(person => person.age));

    return humans.filter(person => person.age === maxAge);
}

const data =[
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
const result = getMostSenior(data);

console.log(result); 