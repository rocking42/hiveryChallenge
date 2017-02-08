export function sortData(data, sortCriteria) {
  return data.sort((prevMach, nextMach) => {
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
}

// Takes userInput and returns any name that includes the criteria
export function searchPlanograms(data, input) {
  const userInput = input.toUpperCase();
  // TODO: Polyfill includes method
  return data.filter(machine => machine["name"].toUpperCase().includes(userInput));
}

export function displayData(data) {
  const templateArr = [];
  let template;
  for (const item of data) {
    template = `
    <div>

    </div>
    `
    templateArr.push(template);
  }
  return templateArr.join("");
}
