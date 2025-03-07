const User = require('../models/user_model')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')



exports.login = async(req, res, next) => {
    try {
        const {email, password} = req.body
        if(!(email && password)){
            throw new Error('All fields are required')
        }

        const user = await User.findOne({email})


        if(user && (await bcrypt.compare(password, user.password))){
            const token = jwt.sign(
                {
                user_id: user._id
                },
            process.env.JWT_SECRET,
            {
                expiresIn: "2d"
            }
        )

        res.status(201).json({
            status: "success",
            message: "user logged in successfully",
            token: token,
            data: user
        })

        }
} catch (error){
    res.status(500).json({error: error.message})
}
}