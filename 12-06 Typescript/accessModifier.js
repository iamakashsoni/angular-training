var Persons = /** @class */ (function () {
    function Persons(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Persons.prototype.fullName = function () {
        return this.fname + " " + this.lname;
    };
    Persons.prototype.display = function () {
        console.log("Hello " + this.fullName());
    };
    return Persons;
}());
var obj01 = new Persons("Akash", "Soni");
var obj11 = new Persons("xyz", "Patil");
var obj21 = new Persons("Kalpesh", "ABC");
var arrNew = [obj01, obj11, obj21];
console.log(arrNew);
console.log(arrNew.sort(function (item1, item2) {
    return item1.fname == item2.fname ? 0 : item1.fname < item2.fname ? -1 : 1;
}));
