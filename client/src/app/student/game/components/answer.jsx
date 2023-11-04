import React, { useState } from "react";

function Response(props) {
  return (
    <div id="myPopup" className="popup">
      <div className="popup-content">
        <p>{props.message}</p>
        <button onClick={props.closePopup} id="closePopup">
          Close
        </button>
      </div>
    </div>
  );
}

export default function Answer(props) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  function handleButtonClick(answer) {
    if (answer == props.answer) {
      setIsAnswerCorrect(true);
      setPopupVisible(true);
    } else {
      setIsAnswerCorrect(false);
      setPopupVisible(true);
    }
  }

  function closePopup() {
    setPopupVisible(false);
  }

  return (
    <div className="box">
      <h1 className="col-span-3 header">Question: {props.question}</h1>
      <button onClick={() => handleButtonClick(1)} className="button">
        Button 1
      </button>
      <button onClick={() => handleButtonClick(4)} className="button">
        Button 4
      </button>
      <button onClick={() => handleButtonClick(3)} className="button">
        Button 3
      </button>
      {isPopupVisible && (
        <Response
          message={isAnswerCorrect ? "Correct answer!" : "Wrong answer."}
          closePopup={closePopup}
        />
      )}
    </div>
  );
}
