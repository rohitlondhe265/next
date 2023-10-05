import { create } from "zustand";

const sampleQuestions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Jupiter", "Mercury"],
    answer: "Mars",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Giraffe", "Kangaroo"],
    answer: "Whale",
  },
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Jupiter", "Mercury"],
    answer: "Mars",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Giraffe", "Kangaroo"],
    answer: "Whale",
  },
];

const useQuizStore = create((set) => ({
  userEmail: "",
  categoryId: "",
  set: "",
  questions: [],
  statusArr: [],
  currentQuestionIndex: 0,
  timer: 0,

  startExamination: (categoryId, selectedSet, email, timer) => {
    try {
      // const response = await axios.get(`/api/questions?categoryId=${categoryId}&set=${set}`);
      // const fetchedQuestions = response.data;
      // const statusArr = new Array(fetchedQuestions.length).fill(false);
      const statusArr = new Array(sampleQuestions.length).fill(false);

      set({
        userEmail: email,
        categoryId,
        set: selectedSet,
        questions: sampleQuestions,
        statusArr,
        currentQuestionIndex: 0,
        timer,
      });
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  },

  selectOption: (questionIndex, selectedOption) => {
    set((state) => {
      const updatedQuestions = [...state.questions];
      updatedQuestions[questionIndex].selectedOption = selectedOption;
      const updatedStatusArr = [...state.statusArr];
      updatedStatusArr[questionIndex] = true;
      return { questions: updatedQuestions, statusArr: updatedStatusArr };
    });
  },

  clearSelectedOption: (questionIndex) => {
    set((state) => {
      const updatedStatusArr = [...state.statusArr];
      updatedStatusArr[questionIndex] = false;

      const updatedQuestions = [...state.questions];
      updatedQuestions[questionIndex].selectedOption = null;

      return {
        questions: updatedQuestions,
        statusArr: updatedStatusArr,
      };
    });
  },

  nextQuestion: () => {
    set((state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1 }));
  },

  previousQuestion: () => {
    set((state) => ({ currentQuestionIndex: state.currentQuestionIndex - 1 }));
  },

  resetQuiz: () => {
    set({
      userEmail: "",
      categoryId: "",
      set: "",
      questions: [],
      statusArr: [],
      currentQuestionIndex: 0,
      timer: 0,
    });
  },
}));

export default useQuizStore;
