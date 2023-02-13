const fs = require("fs");

const name = fs.readFileSync("./texts/name.txt", "utf-8");
console.log({ name });
