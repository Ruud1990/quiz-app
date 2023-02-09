import { shuffleArray } from './utils/shuffleAnswers';

export const fetchQuizQuestions = async () => {
  const endpoint = `https://opentdb.com/api.php?amount=15&difficulty=medium&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
};


