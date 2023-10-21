import Button from "./Button";
import Input from "./Input";
import SelectBox from "./SelectBox";

export default function QuizSettings() {
  return (
    <div className="quizsettings">
      <Input type="text" id="fullName" label="Full Name" />
      <SelectBox />
      <Button>Submit</Button>
    </div>
  );
}
