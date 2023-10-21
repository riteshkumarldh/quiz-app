import QuizSettings from "../components/QuizSettings";

export default function HomePage() {
  return (
    <main>
      <section className="homepage">
        <div className="homepage__container container">
          <div className="homepage__content">
            <h1>Attempt Quiz and Enhance your Knowledge</h1>
          </div>
          <QuizSettings />
        </div>
      </section>
    </main>
  );
}
