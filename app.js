const express = require ("express");
const { authRoute } = require("./routes/auth");
const { userRoute } = require("./routes/user");

const app = express()

app. use ( express.json() );
app. use ( "/api/auth" , authRoute )
app. use ( "/api/user",userRoute )

module.exports = {app}
