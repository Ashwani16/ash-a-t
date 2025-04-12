const {Router} = require ("express")
const { login, signup } = require("../controllers/auth.controller")

const authRoute = Router()

authRoute. post("/signup",signup)
authRoute. post("/login",login)

module.exports={authRoute}

