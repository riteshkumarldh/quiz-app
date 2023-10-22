import Button from "../components/Button";

export default function ResultPage() {
  return (
    <main>
      <section className="result">
        <div className="result__container">
          <ul className="result__cards">
            <li className="result__cards--single">
              <h4>🍕 Total Question</h4>
              <p>15</p>
            </li>
            <li className="result__cards--single">
              <h4>🍕 Attempt Question</h4>
              <p>14</p>
            </li>
            <li className="result__cards--single">
              <h4>🍕 Correct</h4>
              <p>12</p>
            </li>
            <li className="result__cards--single">
              <h4>🍕 Incorrect</h4>
              <p>2</p>
            </li>
            <li className="result__cards--single">
              <h4>🍕 Percent</h4>
              <p>85.55%</p>
            </li>
            <li className="result__cards--single">
              <h4>🍕 Status</h4>
              <p>Pass</p>
            </li>
          </ul>
          <div className="result__actions">
            <Button as="link" to="/">
              Attempt Again
            </Button>
            <Button as="link" to="/profile">
              Profile Page
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
