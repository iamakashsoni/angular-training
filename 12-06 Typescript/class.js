var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello");
    };
    return Greeting;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.display = function () {
        console.log("Hello World");
    };
    return Person;
}());
var obj = new Greeting();
var obj1 = new Person();
obj1.display();
