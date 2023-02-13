const fs = require("fs");

const name = fs.readFileSync("./texts/name.txt", "utf-8");
console.log({ name });

const textOut = `Thic is what you know about me: ${name}.`;
fs.writeFileSync("./texts/what-you-know.txt", textOut);
