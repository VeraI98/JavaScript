class Addition {
    constructor (num) {
        this.num = num;
    }
    
    add (...nums) {
        const sum = (a, b) => a + b;
        return this.num + nums.reduce(sum);
    }
}

const originalAdd = Addition.prototype.add;

Addition.prototype.add = function (...args) {
    console.log('called');
    return originalAdd.apply(this, args);
};

const startedValue = new Addition(5);
const result = startedValue.add(3,5,6) //В консоль выводится "called"
console.log(result) //В консоль выводится 19