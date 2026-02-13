const users = [
    {
id:1,
name:"Alice",
projects: ["crm","admin","crm","analytics"],
    },

    {
id:2,
name:"Bob",
projects: ["landing","admin"],
    },

    {
id:3,
name:"Charlie",
projects: ["crm","landing","landing"],
    },

];


function normalizeUsers(users) {

    const allProjects = new Set();
    const heaveUsers = [];

    const normalizedUsers = users.map(user => {
        const uniqueProjects = new Set();
    
        for (const project of user.projects) {
            uniqueProjects.add(project);
            allProjects.add(project);
        } 
        
        if (uniqueProjects.size > 2) {
            heaveUsers.push(user);
        }

        return {
            ...user,
            projects: Array.from(uniqueProjects),
        };
    });

    return {
        normalizedUsers,
        allProjects: [...allProjects],
        heavyUsers: heaveUsers
    };
}

console.log(normalizeUsers(users));