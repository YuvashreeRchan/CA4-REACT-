import React, { useState,useEffect } from 'react';
import './App.css';
import QuestionBox from "./components/QuestionBox";
import Result from './components/Result';
import questions from './questions';

function App() {
  const [theme, setTheme] = useState('light');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0); 
  const [correctAnswers, setCorrectAnswers] = useState(0);
  
  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleAnswer = (optionId,isCorrect) => {
    setSelectedOptions([...selectedOptions, optionId]);

    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1); 
      setScore(score + 1); 
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(questions.length);
    }
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setCorrectAnswers(0);
    setScore(0);
  };

  return (
    <div className={`app-container`}>
      <div className="top-bar">
        <span className={`kalvium-text ${theme === 'light' ? 'light-text' : 'dark-text'}`}>Kalvium</span>
        <button className="switchTheme" onClick={toggleTheme}>{theme === 'light' ? 'Dark' : 'Light'}</button>
      </div>
      {currentQuestionIndex < questions.length ? (
        <QuestionBox
          question={questions[currentQuestionIndex]}
          currentQuestionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result 
        score={score} 
        correctAns={correctAnswers} 
        totalQuestions={questions.length} 
        restartGame={restartGame}/>
      )}
      
    </div>
  );
};

export default App;


