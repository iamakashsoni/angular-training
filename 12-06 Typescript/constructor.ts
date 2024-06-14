class Person {
  fname: string;
  lname: string;
  constructor(fname: string, lname: string) {
    this.fname = fname;
    this.lname = lname;
  }

  fullName(): string {
    return this.fname + " " + this.lname;
  }

  display(): void {
    console.log("Hello " + this.fullName());
  }
}

var obj: Person = new Person("Akash", "Soni");
var obj1: Person = new Person("xyz", "Patil");
var obj2: Person = new Person("Kalpesh", "ABC");

var arr: Person[] = [obj, obj1, obj2];

console.log(
  arr.sort((item1: Person, item2: Person): number =>
    item1.fname == item2.fname ? 0 : item1.fname < item2.fname ? -1 : 1
  )
);
