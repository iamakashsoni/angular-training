class Persons {
  //   constructor(private fname: string, private lname: string) {}
  constructor(public fname: string, public lname: string) {}

  fullName(): string {
    return this.fname + " " + this.lname;
  }

  display(): void {
    console.log("Hello " + this.fullName());
  }
}

var obj01: Persons = new Persons("Akash", "Soni");

var obj11: Persons = new Persons("xyz", "Patil");
var obj21: Persons = new Persons("Kalpesh", "ABC");

var arrNew: Persons[] = [obj01, obj11, obj21];

console.log(arrNew);

console.log(
  arrNew.sort((item1: Persons, item2: Persons): number =>
    item1.fname == item2.fname ? 0 : item1.fname < item2.fname ? -1 : 1
  )
);
