import Button from "../components/Button";
import QuizQuestion from "../components/QuizQuestion";
import TimerSection from "../components/TimerSection";

export default function QuizPage() {
  return (
    <main>
      <section className="quiz">
        <div className="quiz__container">
          <TimerSection />
          <QuizQuestion />
          <div className="quiz__actions">
            <Button>Cancel</Button>
            <Button>Next</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
