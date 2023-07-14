import mongoose from "mongoose";

/** question model */
const questionSchema = new mongoose.Schema(
    {
        category: { type: String, default: "" },
        set: { type: Number, default: 0 },
        section: { type: Number, default: 0 },
        question: { type: String, default: "" },
        correct_answer: { type: String, default: "" },
        incorrect_answers: { type: Array, default: [] },
    }
);

const Question = mongoose.models.Question || mongoose.model('Question', questionSchema);

export default Question;