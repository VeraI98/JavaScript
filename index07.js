function partition(array, callback = e => e) { 
    const trueArray = [];
    const falseArray = [];

    for (let element of array) {
        if (callback(element)) {
            trueArray.push(element);
        } else {
            falseArray.push(element);
        }
    }

    return [trueArray, falseArray];
}
