const Course = require('./course');

class Degree extends Course {
    constructor(degreeName, degreeDuration, lecturer, courseList){
       super(courseList);
       this.degreeName = degreeName;
       this.degreeDuration = degreeDuration;
       this.lecturer = lecturer;
    }
}

module.exports = Degree;