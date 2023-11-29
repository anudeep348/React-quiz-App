function Progress({ index, numQuestions, points, maxpoints, answer }) {
  return (
    <div>
      <header className="progress">
        <progress
          max={numQuestions}
          value={index + Number(answer !== null)}
        ></progress>
        <p>
          Question <strong>{index + 1}</strong>/{numQuestions}
        </p>
        <p>
          <strong>{points}</strong>/{maxpoints}
        </p>
      </header>
    </div>
  );
}

export default Progress;
