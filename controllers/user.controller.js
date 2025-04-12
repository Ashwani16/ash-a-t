const {UserModel} = require ("../models/users.js") 

async function getUsers(req,res){
    let Users= await UserModel.find()
    res.status(200).json({msg:"Successfully fethed users",Users})
}
async function getOneUser(req,res){
    let user_id = req.params.id
    let user= await UserModel.findOne({_id:user_id})
    if(!user)
        return res.status(404).json({err:"user not found"})
    res.status(200).json({msg:"success",user})
}
async function updateUser(req,res){
    let user_id = req.params.id
    let updatedData = req.body;
    try {
        let info=await UserModel.updateOne({_id:user_id},updatedData)
        if(!info.acknowledged){
            return  res.status(400).json({err:"Something went wrong",info})
        }
        
        res.status(200).json({
            info
        })

    } catch (error) {
        console.log("error",error)
        res.status(401).json({err:error})
    }

}
async function delUser(req,res){
    let user_id = req.params.id
    try {
        let info=await UserModel.deleteOne({_id:user_id})
        if(!info.acknowledged)
            return  res.status(400).json({err:"Something went wrong",info})
        res.json({
            info
        })
    } catch (error) {
        res.status(401).json({err:error})
    }
}

module.exports= {getOneUser,getUsers,updateUser,delUser}