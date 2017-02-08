// Module for loading the JSON file
const d3_request = require("d3-request");
import {
  sortData,
  searchPlanograms,
  displayData
} from "./dataSort";
// Async load the data
d3_request.json("../assets/data/register.json", (err, data) => {
  if (err) console.log(err);
  // Initially display default data
  const dataCont = document.querySelector(".allCont");
  dataCont.innerHTML = displayData(data);

  const input = document.querySelector(".searchGrams");

  input.addEventListener("input", (e) => {
    // Replace the displayed data based on the input pressed
    let filtered = searchPlanograms(data, e.currentTarget.value);
    dataCont.innerHTML = displayData(filtered);
  });

  const linkCont = document.querySelector(".dataLinks");

  for (const link of linkCont.children) {
    if (link.children[0].dataset.link) {
      link.children[0].addEventListener("click", () => {
        // Remove any of the previously selected elements
        for (const link of linkCont.children) {
          if (link.children[0].dataset.link) {
            link.children[0].classList.remove("highlighted");
            link.children[0].children[0].innerHTML = '<i class="fa fa-angle-up" aria-hidden="true"></i>';
          }
        }
        // Sort the data based on the link data value
        let sorted = sortData(data, link.children[0].dataset.link);
        // Add highlighted values
        link.children[0].classList.add("highlighted");
        link.children[0].children[0].innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>';
        // replace existing HTML with new content
        dataCont.innerHTML = displayData(sorted);
      });
    }
  }

});
