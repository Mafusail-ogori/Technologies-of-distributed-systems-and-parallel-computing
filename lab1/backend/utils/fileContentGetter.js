import fs from "fs";

export function fileContentGetter(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const dataArray = data.split(",");
        const numberArray = dataArray.map(Number);
        resolve(numberArray);
      }
    });
  });
}
