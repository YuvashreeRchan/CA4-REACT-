import React, { useState } from 'react';
import "./QuestionBox.css";

const QuestionBox = ({ question, currentQuestionNumber, totalQuestions, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [highlighted, setHighlighted] = useState(false);

  const handleOptionSelect = (optionId) => {
    const selectedOption = question.options.find(option => option.id === optionId);
    if (selectedOption.isCorrect) {
      onAnswer(optionId, true);
    } else {
      onAnswer(optionId, false); 
    }
    setSelectedOption(optionId);
  };

  const handleHighlight = () => {
    setHighlighted(true);
  };

  const handleRemoveHighlight = () => {
    setHighlighted(false);
  };

  return (
    <div> 
      <div className="question-box-container">
        <div className="question-box">
          <div className="question-meta">
            <h3>Question: {currentQuestionNumber} out of {totalQuestions}</h3>
            <p className={highlighted ? 'highlighted' : 'blueText'}>{question.text}</p>
          </div>
          <div className="options">
            {question.options.map(option => (
              <div key={option.id} className={`option ${selectedOption === option.id ? 'selected' : ''}`} onClick={() => handleOptionSelect(option.id)}>
                {option.text}
              </div>
            ))}
          </div>
          <button className='button1' onClick={handleHighlight}>Highlight</button>
          <button className='button1' onClick={handleRemoveHighlight}>Remove Highlight</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
