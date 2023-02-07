import React, {useEffect, useState} from 'react';
import {shuffleArray} from '../utils/shuffleAnswers'

const Quiz = ({data, questionNumber, setQuestionNumber, setTimeOut}) => {

    const [question, setQuestion] = useState(null);

    
    useEffect(() => {
        console.log('Quiz');
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);
  return (
    <div className='quiz'>
        <div className='question'>{question?.question}</div>
        <div className='answers'>
        {question?.options.map((a, index) => (

            <div className='answer' key={index}>{a}
            </div>
        ))}
        </div>
    </div>
  )
}

export default Quiz