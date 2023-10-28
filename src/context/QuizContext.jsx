import { createContext, useReducer } from "react";

import { quizReducer, quizState } from "./reducer";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [{ fullName, quizQuestions }, dispatch] = useReducer(
    quizReducer,
    quizState
  );

  console.log(quizQuestions);

  return (
    <QuizContext.Provider value={{ fullName, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
