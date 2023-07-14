import mongoose from "mongoose";

/** user model */
const userSchema = new mongoose.Schema(
    {
        email: { type: String, default: "" },
    }
)


const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User;