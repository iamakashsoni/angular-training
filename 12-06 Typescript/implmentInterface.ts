interface newPerson {
  display: Function;
}

class Mister implements newPerson {
  display() {
    console.log("Hello");
  }
}

var obj: Mister = new Mister();
obj.display();
