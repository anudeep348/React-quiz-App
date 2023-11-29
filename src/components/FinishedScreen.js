function FinishedScreen({ points, maxpoints, highscore, dispatch }) {
  const percentage = (points / maxpoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🥱";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <div>
      <p className="result">
        <span>{emoji}</span>You Scored <strong>{points}</strong> out of{" "}
        {maxpoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">{`Highscore : ${highscore} points`}</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </div>
  );
}

export default FinishedScreen;
