export const calculateResult = (questions, statusArr) => {
  const answers = questions.map((question) => ({
    question: question.question,
    selectedOption: question.selectedOption,
    correctAnswer: question.answer,
    isCorrect: question.answer === question.selectedOption,
  }));

  const score = answers.filter((answer) => answer.isCorrect).length;
  const percentage = (score / questions.length) * 100;
  const attemptedQuestions = statusArr.filter((status) => status).length;

  const result = {
    score,
    percentage,
    totalQuestions: questions.length,
    attemptedQuestions,
    answers,
  };
  console.log(result);
  return result;
};
