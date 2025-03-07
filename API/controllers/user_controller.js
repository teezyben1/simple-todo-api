const User = require('../models/user_model')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')


exports.createUser = async(req, res, next) => {
    try {
        const {name, email, password} = req.body
        if(!(name && email && password)){
            throw new Error('All fields are required')
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
        res.status(400)
        throw new Error("user already exist")
    }

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            name,
            email,
            password: hashPassword
        })

        const token = jwt.sign(
            {
                // JWT PAYLOAD
                user_id: newUser._id,
            },
            // JWT_SECRET
            process.env.JWT_SECRET,
            {
                expiresIn: "2d"
            }
        )
        res.status(201).json({
            status: "success",
            message: "user created successfully",
            token: token,
            data: newUser
        })







    } catch (error) {
        res.status(500).json({error: error.message})

        
    }
}

exports.getUser = async(req, res, next) => {}
exports.modifyUser = async(req, res, next) => {}
exports.deleteUser = async(req, res, next) => {}