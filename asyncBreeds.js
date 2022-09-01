const fs = require("fs");

const breedDetailsFromFile = function (breed, catBreed) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) catBreed(data);
  });
  console.log("error");
};

breedDetailsFromFile("Bombay", (breed) => {
  console.log("Return Value: ", breed);
});
