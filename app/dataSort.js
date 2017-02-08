const _ = require("lodash/Collection");

export function sortData(data, sortCriteria) {
  const allData = data.sort((prevMach, nextMach) => {
    // Check for NaN when converting to a number
    if(parseInt(prevMach[sortCriteria]) === parseInt(prevMach[sortCriteria])) {
      return parseInt(prevMach[sortCriteria]) - parseInt(nextMach[sortCriteria]);
    }
    // If sorting a string return based on alphabetical position
    if (prevMach[sortCriteria].toUpperCase() < nextMach[sortCriteria].toUpperCase()) {
      return -1;
    }
    if (prevMach[sortCriteria].toUpperCase() > nextMach[sortCriteria].toUpperCase()) {
      return 1;
    }
  });
  // Return a maximum of 10 records
  return allData.length > 10 ? allData.slice(0, 10) : allData;
}

// Takes userInput and returns any name that includes the criteria
export function searchPlanograms(data, input) {
  const userInput = input.toUpperCase();
  const allData =  data.filter(machine => _.includes(machine["name"].toUpperCase(), userInput));
  // Return a maximum of 10 records
  return allData.length > 10 ? allData.slice(0, 10) : allData;
}

// Returns a completed HTML template to be inserted
export function displayData(data) {
  const templateArr = [];
  let template;
  for (const item of data) {
    // Default template displayed for each item
    template = `<div class="dataResults">
      <p style="position: relative;left: 2%;">${item.number}</p>
      <p>${item.name}</p>
      <p>${item.markets}</p>
      <p>${item.author}</p>
      <p>${item.created}</p>
    </div>
    `;
    templateArr.push(template);
  }
  return templateArr.join("");
}
