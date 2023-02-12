import React from 'react'

const Answer = ({answers, callback, userAnswer,number, questions, className}) => {
  return (
    <div className='answers'>

      {answers.map((answer) => (
        <div 
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        //   style={{background: userAnswer?.answer === answer ? 'green' : 'red'}}
        className={className}
        >
          <button className='answerText' disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span  className='answerText' dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
     </div>
  )
}

export default Answer