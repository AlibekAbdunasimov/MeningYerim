import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        user: { type: String, required: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, required: true, default: false },
    },
    { timestamps: true }
)

export default mongoose.model('User', userSchema)
