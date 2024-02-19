import { useEffect, useRef, useState } from "react";
import { questions } from "../../assets/questions";
import "./question.css";

const Question = () => {
  //answer choices
  const choices = ["A", "B", "C", "D"];

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [img, setImg] = useState();
  const [isCorrect, setIsCorrect] = useState(null);
  const [myChoise, setMyChoise] = useState("");
  const myChoicesArray = useRef([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [choicesVisible, setChoicesVisible] = useState(false);

  useEffect(() => {
    if (index < questions.length) {
      //We assign the elements of our array to states
      setQuestion(questions[index].question);
      setAnswer(questions[index].answer);
      setImg(questions[index].media);
      const timerChoices = setTimeout(() => {
        // Choices become active after 10 second
        setChoicesVisible(true);
      }, 10000);

      if (myChoise !== "") {
        //It checks whether the option we chose is correct.
        setIsCorrect(myChoise === answer);
        if (isCorrect) {
          //If selected option is correct , the score increases.
          setScore(score + 1);
        }
      }

      if (!quizComplete) {
        if (isCorrect !== null) {
          //increase index
          setIndex((prevIndex) => prevIndex + 1);
          myChoicesArray.current.push(myChoise);
          setMyChoise("");
          setIsCorrect(null);
          setChoicesVisible(false);
        } else if (!quizComplete) {
          //auto pass when do not any thing
          const timer = setTimeout(() => {
            setIndex((prevIndex) => prevIndex + 1);
            myChoicesArray.current.push("Boş bıraktınız.");
            setMyChoise("");
            setChoicesVisible(false);
          }, 30000);

          return () => clearTimeout(timer, timerChoices);
        }
      }
    } else {
      setQuizComplete(true);
    }
  }, [answer, index, isCorrect, myChoise, quizComplete, score]);

  const handleInput = (event) => {
    setMyChoise(event.target.value);
  };

  return (
    <>
      {quizComplete ? (
        <>
          <div className="font-size">Quiz Tamamlandı</div>
          <ul>
            {myChoicesArray.current.map((myChoice, index) => (
              <li
                key={index}
                className={
                  myChoice === questions[index].answer
                    ? "my-choice correct"
                    : "my-choice false"
                }
              >
                {index + 1}.Cevabın : {myChoice} <br /> Doğru Cevap:{" "}
                {questions[index].answer}
              </li>
            ))}
            <p style={{ textAlign: "center" }}>
              Score: {score}/{questions.length}
            </p>
          </ul>
        </>
      ) : (
        <>
          <div>
            <img src={img} alt="" />
          </div>
          <div className="question-size">{question}</div>
          <div className="buttons">
            {questions[index] &&
              choicesVisible &&
              questions[index].options.map((value, optionIndex) => (
                <button
                  key={optionIndex}
                  type="button"
                  className={"choice answer-size"}
                  value={value}
                  onClick={handleInput}
                >
                  {choices[optionIndex]} ) {value}
                </button>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Question;
