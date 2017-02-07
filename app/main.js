const d3_request = require("d3-request");
import {
  sum
} from "./dataSort";

d3_request.json("../assets/data/register.json", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
