const daysBetween2Dates = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    console.log(date1, date2)
    let days1Words = date1.split('/')
    let days2Words = date2.split('/')
    date1 = new Date(days1Words[1] + "/" + days1Words[0] + "/" + days1Words[2])
    date2 = new Date(days2Words[1] + "/" + days2Words[0] + "/" + days2Words[2])
    return Math.round(Math.abs((date1 - date2) / oneDay));
}

const mongoose = require('mongoose')
const packageSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        trim: true,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    area: {
        type: String,
        // required: true,
        trim: true
    },
    dateIn: {
        type: String,
        required: true
    },
    dateOut: {
        type: String,
        required: true
    },
    sleep: {
        type: Boolean,
        trim: true,
        required: true
    },
    breakfast: {
        type: Boolean,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    avgPrice: {
        type: Number,
        default: function () {
            // if (this.exitDate && this.enterDate)
            // console.log("aaaaaaaaaaaaaaaaqqqqqqqqqqqqqqqqqqq", this.dateIn)
            return this.price / (daysBetween2Dates(this.dateOut, this.dateIn))
            // return 0
        }
    },
    userId: {
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

const Package = mongoose.model('package', packageSchema)

module.exports = Package
