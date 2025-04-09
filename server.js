require('dotenv').config()
require ( "./config/db.js")
const { app } = require("./app");

const PORT =process.env.PORT;

app.get("/",(req,res)=>{
    res.send({
        msg:"API is working 1"
    })
})

app.listen(PORT, ()=>{
    console.log(`✅ Server is running on PORT - ${PORT}`)
})