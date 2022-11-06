// Code your solution here
function findMatching(array, driver) {
    return array.filter((e) => {
        return e.toLowerCase().includes(driver.toLowerCase())
    });
}

function fuzzyMatch(array, driver) {
    return array.filter((e) => {
        return e.startsWith(driver);
    });
}

function matchName(drivers, elements) {
    return drivers.filter((e) => e.name === elements)

}