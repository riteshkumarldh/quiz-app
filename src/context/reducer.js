export const quizState = {
  quizQuestions: [],
  fullName: "",
};

export const themeState = {
  theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark",
};

export const actionTypes = {
  toggleTheme: "TOGGLE_THEME",
  fetchQuiz: "FETCH_QUIZ",
};

export const quizReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.fetchQuiz:
      return {
        ...state,
        quizQuestions: action.payload,
      };
  }
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.toggleTheme:
      localStorage.setItem("theme", state.theme === "dark" ? "light" : "dark");

      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    default:
      return { ...state };
  }
};
