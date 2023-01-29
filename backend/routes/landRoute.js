import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { landField } from '../middleware/checkFields.js'
import landController from './../controllers/landController.js'

const router = express.Router()

router.route('/').get(landController.getLands).post(protect, landField, landController.addLand)
router
    .route('/:id')
    .get(landController.getLand)
    .put(protect, landField, landController.editLand)
    .delete(protect, landController.deleteLand)

export default router
