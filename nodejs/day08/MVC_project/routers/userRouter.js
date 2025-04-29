const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()




router.get('/find',userController.find)
router.get('/delete',userController.delete)
router.get('/update',userController.update)


module.exports = router

