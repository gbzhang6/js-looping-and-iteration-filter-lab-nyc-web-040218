// Code your solution in this file
function findMatching (collection, name) {
  const newArr = []

  for (const driver of collection) {
    if (driver.toUpperCase() === name.toUpperCase())
    {
      newArr.push(driver)
    }
  }
  return newArr
}

function fuzzyMatch(collection, name) {
  const newArr = []

  for (const driver of collection) {
    if (driver.startsWith(name)) {
      newArr.push(driver)
    }
  }
  return newArr
}

function matchName(collection, name) {
  const newArr = []

  for(const driver of collection) {
    if (driver.name === name) {
      newArr.push(driver)
    }
  }
  return newArr
}
