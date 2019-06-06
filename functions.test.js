/*
Just simply installing jest in our directory, the comand npm run jest will run all the files
with the .test.js sufix. ( npm install -D jest )
*/
const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
