function authorizeRole(role){
    return async (req,res,next)=>{
        // console.log(req.user.role, role);
        
            if(req.user.role==role){
                next()
                return 
            }
            res.status(401).json({"msg":"invalid user"})

        }
}

module. exports = { authorizeRole}