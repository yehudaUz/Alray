const jwt = require('jsonwebtoken')
const User = require('../models/user')

function parseCookies(request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function (cookie) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}


const auth = async (req, res, next) => {
    try {
        const cookies = parseCookies(req)
        // console.log(cookies.Authorization)
        const token = cookies.Authorization.replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        console.log("T: " + token + "  D: " + decoded + "   u: " + user)
        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        if (next)
            next()
        return true
    } catch (e) {
        console.log(e)
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth