const { EventEmitter } = require("events");

const firstEmitter = new EventEmitter();

firstEmitter.on("Flash", () => {
  console.log("Bhag milka bhag");
});

// firstEmitter.on("Flash", () => {
//   console.log("Part 2");
// });

firstEmitter.on("Flash1", () => {
  console.log("inside");
  firstEmitter.emit("Flash");
});

firstEmitter.emit("Flash");
firstEmitter.emit("Flash");
firstEmitter.emit("Flash");
firstEmitter.emit("Flash");
firstEmitter.emit("Flash1");
