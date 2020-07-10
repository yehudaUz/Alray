const mongoose = require('mongoose')
const holidayPackageSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        trim: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    area: {
        type: String,
        // required: true,
        trim: true
    },
    enterDate: {
        type: Date
    },
    exitDate: {
        type: Date
    },
    conditions: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        // required: true,
        trim: true
    }, userId: {
        type: String
    }, imgsLinks: [{ type: String }]
}, { timestamps: true },
    { "versionKey": false }
)

// var Original = mongoose.model('Original', OriginalSchema);
// var NewSch = Original.discriminator('NewSch', NewSchema);

// const tempCarAdvertisement = mongoose.model('tempCarAdvertisement', carAdvertisementSchema)
// const CarAdvertisement = tempCarAdvertisement.discriminator("CarAdvertisemen", advertisementSchema)
// console.log("FFFFFFFFFFFFFFFFFFFFF",Advertisement.discriminator)
// const CarAdvertisement = Advertisement.discriminator("CarAdvertisement", carAdvertisementSchema)

const HolidayPackage = mongoose.model('HolidayPackage', holidayPackageSchema)

module.exports = HolidayPackage
