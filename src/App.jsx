import './app.css';
import { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import { fetchQuizQuestions } from './Api';
import MoneyPiramyd from './components/MoneyPiramyd';


function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [goodAnswer, setGoodAnswer] = useState('answer');


       const startGame = async () => {

    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions();
    setQuestions(newQuestions);
    console.log(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setGoodAnswer('answer');
    setLoading(false);
  };

  
  const checkAnswer = (e) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
      console.log(answerObject);
      console.log(correct);
    }
  };


  

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQ = number + 1;

    if (nextQ === 15) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  let questionNumber = number + 1;


  return (
    <div className="app">
      <div className="main">
        <div className="top">
        <h1>millionaires</h1>
        </div>
         {gameOver ? (
          <button className='start' onClick={startGame}>
            Start Game
          </button>
        ) : null}
        {loading ? <p>Loading Questions...</p> : null}
        <div className="bottom">
          <div className="timer">30</div>
        {!gameOver && !loading && userAnswers.length === number + 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
           {!loading && !gameOver && (
          <Quiz
            questionNr={number + 1}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
            goodAnswer={goodAnswer}
          />
        )}
        </div>
      </div>
      <MoneyPiramyd questionNumber={questionNumber}/>
    </div>
  );
}

export default App;
