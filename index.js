// Code your solution here
// 1. Case-insensitive name match
function findMatching(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

// 2. Fuzzy match — begins with same letters
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.startsWith(query));
}

// 3. Match driver by name (object property)
function matchName(drivers, query) {
  return drivers.filter(driver => driver.name === query);
}
