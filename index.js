// Code your solution here

// function findMatching(drivers, aFilter(name) {
//     const matchingName = [];
//     for (const driver of drivers) {
//         if driver.name === name {
//             matchingName.push(driver)
//         }
//     }
//     return matchingName;
// })

// function findMatching(driverName) {
//     for (const driver of drivers) {
//     return driver["Name"] === driverName;
//     }
// }

// drivers.filter(findMatching, driverName)

// function findMatching(drivers, driverName) {
//     //console.log(drivers, driverName)
//     const matchingNames = [];
//     drivers.filter(function() {
//         for (const driver of drivers) {
//             if (driver === 'driverName') {
//                 console.log(driver)
//                 matchingNames.push(driver);
//             }
//         }
//     })
//     return matchingNames;
// }

// function findMatching(drivers, driverName) {
//     const matchingNames = [];
//     drivers.filter(function(driver) {
//         return matchingNames.push(driver === 'driverName');
//     })
//     return matchingNames;
// };

function findMatching(drivers, name) {
    const matchingNames = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return matchingNames;
}

//simpler version
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}



function fuzzyMatch(drivers, name) {
    const beginningLetters = drivers.filter(driver => driver.substring(0,1) === name.substring(0,1))
    return beginningLetters;
}

//simpler version
function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.substring(0,1) === name.substring(0,1))
}


    
// function matchName(drivers, name) {
//     const nameAndPlace = []
//     if (drivers.filter(driver => driver === name)) {
//         return nameAndPlace.push({drivers.name '',' drivers.hometown)
//     }
//     return nameAndPlace;
// }

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}
