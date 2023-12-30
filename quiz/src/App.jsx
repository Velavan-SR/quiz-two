import React, { useState } from 'react';
import './App.css'
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Result from './Components/Result';

const App = () => {
  const [showPage, setshowPage] = useState('home');
  const [score, setScore] = useState(0);

  const showQuiz = () => {
    setshowPage('quiz');
    setScore(0)
  };

  const showResult = () => {
    setshowPage('result');
  };

  const showHome = () => {
    setshowPage('home');
  };

  return (
    <div id='body'>
      {showPage === 'home' && <Home showQuiz={showQuiz}/>}
      {showPage === 'quiz' && <Quiz showResult={showResult} showHome={showHome} setScore={setScore}/>}
      {showPage === 'result' && <Result showHome={showHome} showQuiz={showQuiz} score={score} />}
    </div>
  );
};

export default App;