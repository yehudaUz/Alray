const CarAdvertisement = require('../database/models/carAdvertisment')

const carFindById = (id) => {
    // CarAdvertisement.findOne({ "_id": "5ee7c7ffe8f15e48cca4fa6a" }, function (err, oneAdRecord) {
    //     return oneAdRecord
    // });
}

const carFindAndPrintById = (id) => {
    // console.log(CarAdvertisement)
    CarAdvertisement.findOne({ "_id": "5ee7c7ffe8f15e48cca4fa6a" }, function (err, oneAdRecord) {
        // console.log("QQQQ", oneAdRecord)
 
    });

    // console.log(CarAdvertisement)

}

module.exports = { carFindById, carFindAndPrintById } 