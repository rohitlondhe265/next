import { create } from "zustand";

const useResultStore = create((set) => ({
  score: 0,
  percentage: 0,
  totalQuestions: 0,
  attemptedQuestions: 0,
  answers: [],
  isQuizOver: false,

  // Define setResult action to update the result state
  setResult: (
    newScore,
    newPercentage,
    newTotalQuestions,
    newAttemptedQuestions,
    newAnswers,
    newIsQuizOver
  ) => {
    set({
      score: newScore,
      percentage: newPercentage,
      totalQuestions: newTotalQuestions,
      attemptedQuestions: newAttemptedQuestions,
      answers: newAnswers,
      isQuizOver: newIsQuizOver,
    });
  },
  resetResult: () => {
    set({
      score: 0,
      percentage: 0,
      totalQuestions: 0,
      attemptedQuestions: 0,
      answers: [],
      isQuizOver: false,
    });
  },
}));

export default useResultStore;
