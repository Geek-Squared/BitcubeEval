const Person = require('./person');


class Student extends Person {
    constructor(forenames, surname, email, dateOfBirth, degree) {
    super(forenames, surname, email, dateOfBirth);
    this.degree = degree;
    }
}

module.exports = Student;
