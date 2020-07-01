const mongoose = require('mongoose')
const carAdvertisementSchema = new mongoose.Schema({
    maker: {
        type: String,
        required: true,
        trim: true
    }, model: {
        type: String,
        required: true,
        trim: true
    }, year: {
        type: Number,
        // required: true,
        trim: true
    }, hand: {
        type: Number,
        required: false,
        trim: true
    }, engineCc: {
        type: Number,
        required: false,
        trim: true
    }, engineType: {
        type: String,
        required: false,
        trim: true
    }, area: {
        type: String,
        // required: true,
        trim: true
    }, freeText: {
        type: String,
        required: false,
        trim: true
    }, km: {
        type: Number,
        // required: true,
        trim: true
    },
    engingType: {
        type: String,
        required: false,
        trim: true
    },
    transmitionType: {
        type: String,
        required: false,
        trim: true
    }, dateOnTheRoad: {
        type: Date,
        required: false,
        trim: true
    }, testUntil: {
        type: Date,
        required: false,
        trim: true
    }, lastOwnership: {
        type: String,
        required: false,
        trim: true
    }, ownership: {
        type: String,
        required: false,
        trim: true
    }, isReplaceOk: {
        type: Boolean,
        required: false,
        trim: true
    }, color: {
        type: String,
        required: false,
        trim: true
    }, isFitToDisability: {
        type: Boolean,
        required: false,
        trim: true
    }, imgsLinks: [{ type: String }],
    price: {
        type: Number,
        // required: true,
        trim: true
    }, userId: {
        type: String
    }
}, { timestamps: true },
    { "versionKey": false }
)

// var Original = mongoose.model('Original', OriginalSchema);
// var NewSch = Original.discriminator('NewSch', NewSchema);

// const tempCarAdvertisement = mongoose.model('tempCarAdvertisement', carAdvertisementSchema)
// const CarAdvertisement = tempCarAdvertisement.discriminator("CarAdvertisemen", advertisementSchema)
// console.log("FFFFFFFFFFFFFFFFFFFFF",Advertisement.discriminator)
// const CarAdvertisement = Advertisement.discriminator("CarAdvertisement", carAdvertisementSchema)

const CarAdvertisement = mongoose.model('CarAdvertisement', carAdvertisementSchema)

module.exports = CarAdvertisement //CarAdvertisementSchema
