const express = require('express')
const bodyParser = require('body-parser')
const router = new express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

const carController = require('../controllers/carController')

process.on('uncaughtException', (err, origin) => {
    console.log(err)
    process.exit(1)
});

router.post('/carSearch', carController.carSearch)

router.post('/carSearchInitial', carController.carSearchInitial)

router.post('/getUserData',carController.getUserData)

router.post('/fetchSellerData', carController.fetchSellerData)

router.post('/postNewAd', carController.postNewAd)

router.post('/signup', carController.signup)

router.post('/login', carController.login)

router.post('/users/logout', carController.logOut)

router.get('*', async (req, res) => { return res.redirect('/') })

router.get(/html$/, async (req, res) => { res.redirect('/') })

router.get(async (req, res, next) => {
    if ((req.path.indexOf('html') >= 0)) {
        res.redirect('/');
    }
});

module.exports = router