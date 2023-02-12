import React from 'react';
import Answer from './Answer';

const Quiz = ({question,
  answers,
  callback,
  number,
  questions,
  className,
  userAnswer,
  questionNr,}) => {
  return (
    <div className='quiz'>
      <div className='number'>
      Question: {questionNr}
    </div>
       <div className='question' dangerouslySetInnerHTML={{ __html: question }}></div>
     <div>
     <Answer 
      answers={answers}
      callback={callback}
      userAnswer={userAnswer}
      number={number}
      questions={questions}
      className={className}
     />
     {userAnswer ? <p className='correctAnswer1'>Correct Answer: <span className='correctAnswer2'>{questions[number].correct_answer}</span></p> : null}
    </div>
    </div>
  )
}

export default Quiz