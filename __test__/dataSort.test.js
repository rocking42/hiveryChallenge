const fs = require("fs");
import {
  sortData,
  searchPlanograms,
  displayData
} from "../app/dataSort.js";

const data = fs.readFileSync("assets/data/register.json");
const dataParse = JSON.parse(data)

test("Sorts the data returning the correct first value", () => {
  const searchCriteria = "number";
  expect(sortData(dataParse, searchCriteria)[0].number).toBe("04114");
});

test("Filters Planograms based on userInput", () => {
  const userInput = "EP";
  expect(searchPlanograms(dataParse, userInput)[0].name).toBe("EP Countertop Long_v2");
});

test("Filtered Planograms is the correct length", () => {
  const userInput = "EP";
  expect(searchPlanograms(dataParse, userInput).length).toBe(3);
});

test("displayData returns correct HTML provided the correct data", () => {
  console.log(displayData(dataParse));
  expect(displayData(dataParse).startsWith('<div class="dataResults">')).toBe(true);
});
