const fs = require("fs");

fs.mkdir("./assets", (err) => {
  if (err) console.error(err);
  console.log("folder created");
})

fs.writeFile("./.gitignore", "node_modules", (err) => {
  if (err) console.error(err);
  console.log("wrote to file");
})