const express = require("express")
const PORT =8080;
const app =express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.send({
        msg:"API is working 1"
    })
})
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT - ${PORT}`)
})