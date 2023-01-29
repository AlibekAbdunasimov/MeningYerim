import expressAsyncHandler from 'express-async-handler'
import { validationResult } from 'express-validator'
import Land from './../models/Land.js'

const land = {
    /**
     * @desc    Get lands
     * @route   GET /lands
     * @access  Public
     */
    getLands: expressAsyncHandler(async (req, res) => {
        const lands = await Land.find({})

        res.status(200).json(lands)
    }),

    /**
     * @desc    Get land
     * @route   GET lands/:id
     * @access  Public
     */
    getLand: expressAsyncHandler(async (req, res) => {
        const land = await Land.findById(req.params.id)

        if (land) res.status(200).json(land)
        else res.status(400).json({ message: 'Yer topilmadi', success: false })
    }),

    /**
     * @desc    Add land
     * @route   POST lands
     * @access  Private
     */
    addLand: expressAsyncHandler(async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array() })
        }

        if (req.user) {
            const { landSize, landPrice, rent, desc, location } = req.body

            await Land.create({
                landSize,
                landPrice,
                rent,
                desc,
                location,
                phone: req.user.phone,
                user: req.user.user,
                userId: req.user.id,
            }).then(() => res.status(201).json({ message: 'Land added', success: true }))
        } else res.status(400).json({ message: 'Land not found', success: false })
    }),

    /**
     * @desc    Edit land
     * @route   PUT lands/:id
     * @access  Private
     */
    editLand: expressAsyncHandler(async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array() })
        }

        if (req.user) {
            const land = await Land.findById(req.params.id)

            if (land) {
                const { landSize, landPrice, rent, desc, location } = req.body

                await Land.findByIdAndUpdate(
                    req.params.id,
                    {
                        landSize,
                        landPrice,
                        rent,
                        desc,
                        location,
                        phone: req.user.phone,
                        user: req.user.user,
                        userId: req.user.id,
                    },
                    { new: true }
                ).then(() => res.status(200).json({ message: 'Land updated', success: true }))
            } else res.status(400).json({ message: 'Yer topilmadi', success: false })
        } else res.status(400).json({ message: 'Land not found', success: false })
    }),

    /**
     * @desc    Delete land
     * @route   DELETE lands/:id
     * @access  Private
     */
    deleteLand: expressAsyncHandler(async (req, res) => {
        const land = await Land.findById(req.params.id)

        if (land)
            await Land.findByIdAndDelete(req.params.id).then(() =>
                res.status(200).json({ message: 'Land deleted', success: true })
            )
        else res.status(400).json({ message: 'Land not found', success: false })
    }),
}

export default land
