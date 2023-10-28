import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import SelectBox from "./SelectBox";

import {
  numberQuestions,
  typeQuestions,
  questionDifficulty,
} from "../utils/contants/quizdata";
import { useFetch } from "../utils/hooks/useFetch";
import { useQuiz } from "../utils/hooks/useQuiz";
import { actionTypes } from "../context/reducer";

export default function QuizSettings() {
  const { dispatch, fullName } = useQuiz();
  const [fields, setFields] = useState({
    fullName,
    numberQuestion: "10",
    typeQuestion: "any",
    category: "any",
    difficulty: "any",
  });

  const { data: quizCategories, error } = useFetch(
    "https://opentdb.com/api_category.php"
  );

  if (error) {
    alert("Something is wrong Not able to fetch the categores. please Retry");
  }

  const handleQuiz = async (e) => {
    e.preventDefault();
    if (fields.fullName.trim() === "") {
      return alert("Please Fill your Name to proceed Further");
    }

    try {
      dispatch({ type: actionTypes.loading });
      const res = await fetch("https://opentdb.com/api.php?amount=10");
      const result = await res.json();
      console.log(result);
      dispatch({
        type: actionTypes.fetchQuiz,
        payload: { data: result.results, name: fields.fullName },
      });
    } catch (error) {
      dispatch({ type: actionTypes.error, payload: error });
    }
  };

  return (
    <form className="quizsettings">
      <Input
        type="text"
        id="fullName"
        placeholder="Enter Full Name"
        label="Full Name"
        fields={fields}
        setFields={setFields}
      />
      <SelectBox
        options={numberQuestions}
        label="No. of Questions"
        id="numberQuestion"
        fields={fields}
        setFields={setFields}
      />
      <SelectBox
        options={typeQuestions}
        label="Type of Questions"
        id="typeQuestion"
        fields={fields}
        setFields={setFields}
      />
      <SelectBox
        options={quizCategories?.trivia_categories}
        label="Select Category"
        id="category"
        fields={fields}
        setFields={setFields}
      />
      <SelectBox
        options={questionDifficulty}
        label="Select Difficult"
        id="difficulty"
        fields={fields}
        setFields={setFields}
      />
      <Button type="submit" onClick={handleQuiz}>
        Start Quiz
      </Button>
    </form>
  );
}
