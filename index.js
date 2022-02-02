// Code your solution in this fil

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(math){ // created a function called createFareMultiplier that takes an argument math
    return function createFareMultiplier(fare){ //returning a function that will multiply a fare
            return fare * math;
    }
}


const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


selectDifferentDrivers = (arrayOfDrivers, returnLastTwoDrivers) => {
    return returnLastTwoDrivers(arrayOfDrivers);
}