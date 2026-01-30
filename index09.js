function createUsernames(users) {
    const currentYear = new Date().getFullYear();

    return users.map(user => {
        const birthYear = currentYear - user.age;
        const firstName = user.firstName.toLowerCase();
        const lastNameInitial = user.lastName[0].toLowerCase();

        return {
            ...user,
            username: `${firstName}${lastNameInitial}${birthYear}`
        };
    });
}

const data = [
{ firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
{ firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
console.log(createUsernames(data));
