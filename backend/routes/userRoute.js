import express from 'express'
import { protect } from './../middleware/authMiddleware.js'
import userController from './../controllers/userController.js'
import { userAddField, userLoginField } from '../middleware/checkFields.js'

const router = express.Router()

router.route('/').get(protect, userController.getUser).post(userLoginField, userController.login)
router.route('/register').post(userAddField, userController.register)

export default router
