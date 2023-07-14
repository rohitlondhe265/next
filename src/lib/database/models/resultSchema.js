import mongoose from "mongoose";


/** result model */
const resultSchema = new mongoose.Schema(
    {
        email: { type: String, default: "" },
        username: { type: String, default: "" },
        exam: { type: String, default: "" },
        attempts: { type: Number, default: 0 },
        points: { type: Number, default: 0 },
        performance: { type: String, default: "" },
        createdAt: { type: Date, default: Date.now() }
    }
)


const Result = mongoose.models.Result || mongoose.model('Result', resultSchema)
export default Result;