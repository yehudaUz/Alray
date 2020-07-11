const express = require('express')
const bodyParser = require('body-parser')
const router = new express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

const packagesController = require('../controllers/packagesController')

process.on('uncaughtException', (err, origin) => {
    console.log(err)
    process.exit(1)
});

router.post('/packageSearch', packagesController.packageSearch)

router.post('/packageSearchInitial', packagesController.packageSearchInitial)

router.get('*', async (req, res) => { return res.redirect('/') })

router.get(/html$/, async (req, res) => { res.redirect('/') })

router.get(async (req, res, next) => {
    if ((req.path.indexOf('html') >= 0)) {
        res.redirect('/');
    }
});

module.exports = router