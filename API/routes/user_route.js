const router = require('express').Router()

const {createUser, getUser, modifyUser, deleteUser} = require('../controllers/user_controller')


router.post('/user', createUser)
router.get('/user/:id', getUser)
router.patch('/user/:id', modifyUser)
router.delete('/user/:id', deleteUser)


module.exports = router