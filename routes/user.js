const {Router} = require ("express")
const { getUsers, delUser, updateUser, getOneUser } = require("../controllers/user.controller")
const { auth } = require("../middelware/auth.middelware")
const { authorizeRole } = require("../middelware/authorizeRole")

const userRoute = Router()

userRoute. get("/",auth,getUsers)
userRoute. get("/:id",auth,getOneUser)
userRoute. patch("/:id",auth,authorizeRole("admin"),updateUser)
userRoute. delete("/:id",auth,authorizeRole("admin"),delUser)

module.exports={userRoute}

