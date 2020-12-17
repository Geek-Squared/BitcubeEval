const Degree = require('./degree');


class Course{
    constructor(courseName, courseDuration,courseList,degreeName){
           this.courseName = courseName;
           this.courseDuration = courseDuration;
           this.courseList = courseList;
           this.degreeName = degreeName;
    }
}

module.exports = Course;