import React from 'react';
import "./Result.css";

const Result = ({ score, correctAns, totalQuestions, restartGame }) => {
  const percentage = (score / totalQuestions) * 100;
  return (
    <div>
      <div className="result-box-container">
        <div className="result-box">
            <h2>Final Results</h2>
            <p>{correctAns} out of {totalQuestions} correct - ({percentage}%)</p>
            <button className='restartBtn'  onClick={restartGame}>Restart game</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
