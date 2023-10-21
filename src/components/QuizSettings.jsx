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
  const { data } = useFetch("https://opentdb.com/api_category.php");

  return (
    <div className="quizsettings">
      <Input
        type="text"
        id="fullName"
        placeholder="Enter Full Name"
        label="Full Name"
      />
      <SelectBox
        options={numberQuestions}
        label="No. of Questions"
        id="numberQuestion"
      />
      <SelectBox
        options={typeQuestions}
        label="Type of Questions"
        id="typeQuestion"
      />
      <SelectBox
        options={data?.trivia_categories}
        label="Select Category"
        id="category"
      />
      <SelectBox
        options={questionDifficulty}
        label="Select Difficult"
        id="difficulty"
      />
      <Button>Submit</Button>
    </div>
  );
}
