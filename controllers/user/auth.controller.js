const bcrypt = require( "bcryptjs" )
var jwt = require('jsonwebtoken');
const {UserModel} = require ("../../models/users.js") 
async function signup ( req, res ) {
   
    const {email,password}= req.body

    const hash = bcrypt.hashSync(password,10)

    try {
        // await UserModel.deleteMany()
        const User= new UserModel({email,password:hash})
        await User.save()
        res.status(201).json({ message: 'User created', user:{email,password} });

    } catch (error) {
        console.log("❌")

        res.status(500).json({ message: 'Something went wrong', error: error.message });

    }
}

async function login ( req, res ) {
    const {email,password}= req.body
    // console.log(email,password);
    
    try {

        const User= await UserModel.findOne({email})
        // console.log(User);
        
        if(!User ||!bcrypt.compareSync(password,User.password )){
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: User._id }, 'secretkey');

        res.json({ token });

    } catch (error) {

        res.status(500).json({ message: 'Something went wrong', error: error.message });

    }
}

module.exports = { signup, login }