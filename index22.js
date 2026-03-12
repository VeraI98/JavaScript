function  Employee (name, salary) {
    this.name = name;
    this.salary = salary;
}

Employee.prototype.getInfo = function () {
    return `Employee: ${this.name}, Salary: ${this.salary}`;
};

Employee.prototype.increaseSalary = function (percent) {
    this.salary += this.salary * (percent / 100);
};

function Manager(name, salary, department) {
    Employee.call(this, name, salary);
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.getInfo = function () {
    return `Manager: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`;
};

Manager.prototype.assignTask = function (taskName) {
    console.log(`${this.name} assigned task: ${taskName}`);
};


// ------------------------------------------------------------------


function logSalary(currency) {
    console.log(`${this.name} earns ${this.salary} ${currency}`);
}

const vera = new Employee("Vera", 8000);
const songyn = new Manager('Songyn', 5000, 'IT');


logSalary.call(vera, '$');
logSalary.apply(songyn, ['€']);

const boundLogSalary = logSalary.bind(songyn, '₩');
boundLogSalary();


console.log(vera.getInfo());
songyn.increaseSalary(10);
console.log(songyn.getInfo());
songyn.assignTask('Prepare report');
