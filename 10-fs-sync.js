const { readFileSync, writeFileSync, write } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/first.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, 
${second}`,{flag: 'a'}
);

console.log(first, second);
