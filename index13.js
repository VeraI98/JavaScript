function getEligibleRoles(roles, permission, minLevel) {
    const result = [];

    for (const roleName in roles) {
        const role = roles[roleName];

        if (role.level < minLevel) continue;
        if (!role.permissions.includes(permission)) continue;

        result.push(roleName);
    }

    return result;
}

getEligibleRoles(roles, "write", 2); // ["admin", "editor"]
