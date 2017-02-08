const d3_request = require("d3-request");
import {
  sortData,
  searchPlanograms,
  displayData
} from "./dataSort";

d3_request.json("../assets/data/register.json", (err, data) => {
  if (err) console.log(err);
  
});
