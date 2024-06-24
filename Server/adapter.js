import csvtojson from "csvtojson";
import fs from "fs";

const csvToJson = (filePath) => {
  return new Promise((resolve, reject) => {
    csvtojson()
      .fromFile(filePath)
      .then((jsonObj) => {
        resolve(jsonObj);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default csvToJson;
