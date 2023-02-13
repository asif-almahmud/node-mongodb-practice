const fs = require("fs");

const before = "You see me before";
fs.readFile("./texts/name.txt", "utf-8", (err, data) => {
  console.log({ name: data });
});

console.log(before);
