const d3_request = require("d3-request");
import {
  sortData,
  searchPlanograms,
  displayData
} from "./dataSort";

d3_request.json("../assets/data/register.json", (err, data) => {
  if (err) console.log(err);
  const dataCont = document.querySelector(".allCont");
  dataCont.innerHTML = displayData(data);

  const input = document.querySelector(".searchGrams");

  input.addEventListener("input", (e) => {
    let filtered = searchPlanograms(data, e.currentTarget.value);
    dataCont.innerHTML = displayData(filtered);
  });

  const linkCont = document.querySelector(".dataLinks");

  for (const link of linkCont.children) {
    if (link.children[0].dataset.link) {
      link.children[0].addEventListener("click", () => {
        for (const link of linkCont.children) {
          link.children[0].classList.remove("highlighted");
          if (link.children[0].dataset.link) link.children[0].children[0].innerHTML = '<i class="fa fa-angle-up" aria-hidden="true"></i>';
        }
        let sorted = sortData(data, link.children[0].dataset.link);
        link.children[0].classList.add("highlighted");

        link.children[0].children[0].innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>';
        dataCont.innerHTML = displayData(sorted);
      });
    }
  }

});
