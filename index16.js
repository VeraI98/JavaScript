const data = [
    {
        firstName: 'Noah',
        lastName: 'M.',
        country: 'Switzerland',
        continent: 'Europe',
        age: 19,
        language: 'C',
        year: 2019,
    },
    {
        firstName: 'Anna',
        lastName: 'R.',
        country: 'Liechtenstein',
        continent: 'Europe',
        age: 52,
        language: 'JavaScript',
        year: 2019,
    },
    {
        firstName: 'Piter',
        lastName: 'G.',
        country: 'Sweden',
        continent: 'Europe',
        age: 30,
        language: 'JavaScript',
        year: 2019,
    },
    {
        firstName: 'Ramon',
        lastName: 'R.',
        country: 'Paraguay',
        continent: 'Americas',
        age: 29,
        language: 'Ruby',
        year: 2014,
    },
    {
        firstName: 'George',
        lastName: 'B.',
        country: 'England',
        continent: 'Europe',
        age: 81,
        language: 'C',
        year: 2016,
    },
    ];

    function getLanguagesStatistic(reviews) {
    return reviews
        .filter(review => review.year === 2019)
        .reduce((stat, review) => {
        const lang = review.language;
        stat[lang] = (stat[lang] || 0) + 1;
        return stat;
        }, {});
}

const result = getLanguagesStatistic(data);
console.log(result);
// { C: 1, JavaScript: 2 }
