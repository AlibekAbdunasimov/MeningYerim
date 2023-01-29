import mongoose from 'mongoose'

const landSchema = mongoose.Schema(
    {
        landSize: { type: String, required: true },
        landPrice: { type: String, required: true },
        location: { type: String, required: true },
        rent: { type: String, required: true },
        user: { type: String, required: true },
        phone: { type: String, required: true },
        desc: { type: String, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    },
    { timestamps: true }
)

export default mongoose.model('Land', landSchema)
