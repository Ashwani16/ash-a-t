var jwt = require('jsonwebtoken');

async function auth(req,res,next) {
    let token = req.headers.authorization?.split(" ")[1]
    // console.log(token)
    try {
        let user = jwt.verify(token, 'secretkey');
        req.user=user;
        next()

    } catch (error) {
        res.status(401).json({"msg":"invalid token"})
    }
    
}

module.exports = {auth}