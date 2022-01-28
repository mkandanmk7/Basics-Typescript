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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// var person1 = new Person("Muthu", "Manikandan");
// // person1.firstName = "muthu";
// // person1.lastName = "manikandan";
// console.log(person1.getFullName());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("hello");
    };
    return Person;
}());
var Programer = /** @class */ (function (_super) {
    __extends(Programer, _super);
    function Programer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programer.prototype.greet = function () {
        console.log("hello World");
    };
    return Programer;
}(Person));
var newPerson = new Programer();
newPerson.greet();
