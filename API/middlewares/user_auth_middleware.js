const User = require('../models/user_model')
const jwt = require ('jsonwebtoken')
const dotenv = require('dotenv').config()


const isLoggedIn = async(req, res, next) =>{
    if(!req.headers.authorization ) {
        res.status(401).json("Please login to access this page");
    }

     else{
          const token  = req.header('Authorization').replace('Bearer ', '');        

            jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
                if(err) {
                    res.status(401).json("Please login to access this page");
                }

                req.user = await User.findById(decoded.user_id)
                
                next();
        })}
    
}

module.exports = isLoggedIn