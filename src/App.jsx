import { useState } from "react";
import "./App.css";
import Question from "./components/questionComponent/Question";
import Description from "./components/DescriptionComponent/Description";
const App = () => {
  const [quizComp, setQuizComp] = useState(false);
  const handleButtonClick = () => {
    setQuizComp(!quizComp);
  };

  return (
    <div className="app">
      {quizComp ? <Question /> : <Description click={handleButtonClick} />}
    </div>
  );
};

export default App;
