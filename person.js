let forenames = {
    firstName: String,
    secondName: String,
}

class Person{
    constructor(forenames, surname, email, dateOfBirth, degreeLink){
       this.name = forenames;
       this.surname = surname;
       this.email = email;
       this.dateOfBirth = dateOfBirth;
       this.firstName = forenames[0];
       this.fullName = forenames + surname;
    }
   greeting(){
       console.log("My name is " + this.fullName);
   }
}

module.exports = Person;
