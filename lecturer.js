const Person = require('./person');

class Lecturer extends Person {
    constructor(forenames, surname, email, dateOfBirth, firstName, fullName) {
    super(forenames, surname, email, dateOfBirth,firstName, fullName);
    this.degree = degree;
    }
}


module.exports = Lecturer;


