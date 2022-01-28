// class Person {
//   firstName: string;
//   lastName: string;
//   constructor(firstname: string, lastname: string) {
//     this.firstName = firstname;
//     this.lastName = lastname;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// var person1 = new Person("Muthu", "Manikandan");
// // person1.firstName = "muthu";
// // person1.lastName = "manikandan";

// console.log(person1.getFullName());

class Person {
  firstName: string;
  LastName: string;

  greet() {
    console.log("hello");
  }
}

class Programer extends Person {
  greet(): void {
    console.log("hello World");
  }
}

var newPerson = new Programer();

newPerson.greet();
