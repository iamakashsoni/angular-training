function sayhi(id: number, fname: string, lname?: string): void {
  console.log("ID:", id);
  console.log("First Name:", fname);
  if (lname != undefined) {
    console.log("Last name:", lname);
  }
}

sayhi(1, "Akash");
sayhi(1, "Akash", "Soni");
