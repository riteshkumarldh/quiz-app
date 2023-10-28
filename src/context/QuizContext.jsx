import { createContext } from "react";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  return <QuizContext.Provider value={{}}>{children}</QuizContext.Provider>;
};

export default QuizProvider;
