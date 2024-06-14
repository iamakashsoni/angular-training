class Greeting {
  greet(): void {
    console.log("Hello");
  }
}

class Person {
  display(): void {
    console.log("Hello World");
  }
}

var obj: Greeting = new Greeting();
var obj1 = new Person();
obj1.display();
