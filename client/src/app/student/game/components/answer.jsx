import React from "react";


export default function Answer(props) {
    function handleButtonClick(answer) {
        if (answer == props.answer) {
            window.alert("good job");
        } else {
            window.alert("you suck");
        }
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
        </div>
    )
}