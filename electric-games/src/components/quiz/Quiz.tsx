import { useState } from "react";

const Quiz = () => {
  const [showFinalScore, setFinalScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const electricGameQuizQustions = [
    {
        question: "What year was Mario Kart 8 Deluxe relased?",
        answerOptions: [
            {id: 0, aOText: "2014", isCorrectAnswer: true},
            {id: 1, aOText: "2008", isCorrectAnswer: false},
            {id: 2, aOText: "2018", isCorrectAnswer: false},
            {id: 3, aOText: "2012", isCorrectAnswer: false},
        ]
    }, 

    {
        question: "Which develeoper produced The Last of Us?",
        answerOptions: [
            {id: 0, aOText: "EA", isCorrectAnswer: false},
            {id: 1, aOText: "Rockstar", isCorrectAnswer: false},
            {id: 2, aOText: "Naughty Dog", isCorrectAnswer: true},
            {id: 3, aOText: "Gamefreak", isCorrectAnswer: false},
        ]
    }, 

    {
        question: "Which Pokemon was on the cover of Pokemon Ruby?",
        answerOptions: [
            {id: 0, aOText: "Pikachu", isCorrectAnswer: false},
            {id: 1, aOText: "Charizard", isCorrectAnswer: false},
            {id: 2, aOText: "Lugia", isCorrectAnswer: false},
            {id: 3, aOText: "Groudon", isCorrectAnswer: true},
        ]
    }, 

    {
        question: "What is the name of the main character in the Uncharted series?",
        answerOptions: [
            {id: 0, aOText: "Joe Miller", isCorrectAnswer: false},
            {id: 1, aOText: "Nathan Drake", isCorrectAnswer: true},
            {id: 2, aOText: "Chloe Fraser", isCorrectAnswer: false},
            {id: 3, aOText: "Nadine Ross", isCorrectAnswer: false},
        ]
    }, 

    {
        question: "How many playable characters are there in League Of Legends?",
        answerOptions: [
            {id: 0, aOText: "50", isCorrectAnswer: false},
            {id: 1, aOText: "92", isCorrectAnswer: false},
            {id: 2, aOText: "124", isCorrectAnswer: false},
            {id: 3, aOText: "162", isCorrectAnswer: true},
        ]
    }, 

    {
        question: "What year was Halo 3 released?",
        answerOptions: [
            {id: 0, aOText: "2006", isCorrectAnswer: false},
            {id: 1, aOText: "2007", isCorrectAnswer: true},
            {id: 2, aOText: "2008", isCorrectAnswer: false},
            {id: 3, aOText: "2010", isCorrectAnswer: false},
        ]
    }, 

    {
      question: "Which fotball player is on the cover of Fifa 23?",
      answerOptions: [
          {id: 0, aOText: "Ronaldo", isCorrectAnswer: false},
          {id: 1, aOText: "Mbappe", isCorrectAnswer: true},
          {id: 2, aOText: "Messi", isCorrectAnswer: false},
          {id: 3, aOText: "Haaland", isCorrectAnswer: false},
      ]
  }, 

  {
    question: "Whiat game is the best selling game of all time?",
    answerOptions: [
        {id: 0, aOText: "GTA V", isCorrectAnswer: false},
        {id: 1, aOText: "Fifa 10", isCorrectAnswer: false},
        {id: 2, aOText: "Pokemon Red", isCorrectAnswer: false},
        {id: 3, aOText: "Minecraft", isCorrectAnswer: true},
    ]
}, 

{
  question: "What is the name of the main character in God of War?",
  answerOptions: [
      {id: 0, aOText: "Thanos", isCorrectAnswer: false},
      {id: 1, aOText: "Gandalf", isCorrectAnswer: false},
      {id: 2, aOText: "Kratos", isCorrectAnswer: true},
      {id: 3, aOText: "Zeus", isCorrectAnswer: false},
  ]
}, 

{
  question: "What is the name of the main character in the Legend of Zelda serie",
  answerOptions: [
      {id: 0, aOText: "Mario", isCorrectAnswer: false},
      {id: 1, aOText: "Link", isCorrectAnswer: true},
      {id: 2, aOText: "Zelda", isCorrectAnswer: false},
      {id: 3, aOText: "Joker", isCorrectAnswer: false},
  ]
}, 


];

const optionClickedOn = (isCorrectAnswer: boolean) => {
    if(isCorrectAnswer){
      setScore(score + 1);

    }

    if (currentQuestion + 1 < electricGameQuizQustions.length){
      setCurrentQuestion(currentQuestion + 1);
    }

    else {
      setFinalScore(true);
    }
    
}

const restartQuiz = () => {
  setScore(0);
  setCurrentQuestion(0);
  setFinalScore(false);
}

  return (
    <>
      <h1 className="quizMainHeadline">Electric Games Quiz</h1>

      <h2 className="quizSecondaryHeadline">Current Score: {score} </h2>
      {showFinalScore ? (
        <section className="resultSection">
          <h2>Final score: {score} / {electricGameQuizQustions.length} - ({(score/electricGameQuizQustions.length) * 100}%) </h2>
          

          <button className="restartBtn btn btn-warning" onClick={restartQuiz}>
            ↻ Restart Quiz ↻
          </button>
        </section>
      ) : (
        <article className="question">
          <h3 className="questionHeadline">Question {currentQuestion + 1} / {electricGameQuizQustions.length}</h3>
          <p className="questionText">{electricGameQuizQustions[currentQuestion].question}</p>

          <ul className="answerOptionList">
          {electricGameQuizQustions[currentQuestion].answerOptions.map((option) =>{
                return (
                    <li className="answerOption" onClick={() => optionClickedOn(option.isCorrectAnswer) } key={option.id}>{option.aOText}</li>
                );
            })}
          </ul>
        </article>
      )}
    </>
  );
};

export default Quiz;
