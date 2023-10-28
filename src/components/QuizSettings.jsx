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

export default function QuizSettings() {
  const [fields, setFields] = useState({
    fullName: "",
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
      <Button>Start Quiz</Button>
    </form>
  );
}
