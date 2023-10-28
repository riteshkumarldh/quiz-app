export const quizState = {
  quizQuestions: [],
  fullName: localStorage.getItem("userName")
    ? localStorage.getItem("userName")
    : "",
  status: null,
  error: null,
};

export const themeState = {
  theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark",
};

export const actionTypes = {
  toggleTheme: "TOGGLE_THEME",
  fetchQuiz: "FETCH_QUIZ",
  setQuizSettings: "SET_QUIZ_SETTINGS",
  loading: "LOADING",
  error: "ERROR",
};

export const quizReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.fetchQuiz:
      localStorage.setItem("userName", action.payload.name);
      return {
        ...state,
        fullName: action.payload.name,
        quizQuestions: action.payload.data,
        status: null,
        error: null,
      };
    case actionTypes.loading:
      return {
        ...state,
        status: "loading",
      };
    case actionTypes.error:
      return {
        ...state,
        error: action.payload,
        status: null,
      };
  }
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.toggleTheme:
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    default:
      return { ...state };
  }
};
