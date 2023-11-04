
"use client"
import { useState, useEffect } from "react";

import { Checkpoint } from "./components/checkpoint"; 
import { Assessment } from "./components/assessment";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyBODLqsYeOWlBt56FBqTPfJAe2iwmCzE7I",

    authDomain: "team9-cfg-99712.firebaseapp.com",

    projectId: "team9-cfg-99712",

    storageBucket: "team9-cfg-99712.appspot.com",

    messagingSenderId: "673571130811",

    appId: "1:673571130811:web:5d5b97b9929938e5af089e",

    measurementId: "G-728Z36QH6Q"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

  
export default function game() {
    
    const [world, setWorld] = useState(1);
    const [content, setContent] = useState([
        {
          "checkpoint5": {
            "correctAnswer": 0,
            "answers": [
              "1",
              "2",
              "3"
            ],
            "question": "test question"
          },
          "checkpoint3": {
            "question": "What is 6+3",
            "correctAnswer": 2,
            "answers": [
              "1",
              "3",
              "9"
            ]
          },
          "assessment": {
            "correctAnswer1": 0,
            "answers1": [
              "1",
              "2",
              "3"
            ],
            "correctAnswer2": 0,
            "answers3": [
              "",
              "",
              ""
            ],
            "question2": "",
            "question3": "",
            "answers2": [
              "",
              "",
              ""
            ],
            "question1": "Please work",
            "correctAnswer3": 0
          },
          "checkpoint2": {
            "correctAnswer": 0,
            "question": "What is 1+1",
            "answers": [
              "2",
              "1",
              "4"
            ]
          },
          "checkpoint4": {
            "answers": [
              "6",
              "3",
              "1"
            ],
            "question": "What is 9-3",
            "correctAnswer": 0
          },
          "checkpoint1": {
            "question": "What is 2+2",
            "correctAnswer": 1,
            "answers": [
              "2",
              "4",
              "5"
            ]
          }
        }
      ]); // Static data before we get firestore sorted
    const [inCheckpoint, toggleInCheckpoint] = useState(false);
    const [assessmentReady, toggleAssessmentReady] = useState(false);
    const [progress, setProgress] = useState(1);
    useEffect(() => {
        if (progress == 5) {
            toggleAssessmentReady(true);
            console.log("assessment ready");
        }
    }, [progress])
    const colors = ["bg-red-100", "bg-orange-100", "bg-yellow-100", "bg-green-100", "bg-blue-100", "bg-purple-100", "bg-violet-100"];
    function enterCheckpoint(questionNumber)    {
        toggleInCheckpoint(true);
        
    };
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
      
    function CheckpointPopup(props) {
        const [isPopupVisible, setPopupVisible] = useState(false);
        const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
      
        function handleButtonClick(answer) {
          if (answer == props.answer) {
            setIsAnswerCorrect(true);
            setPopupVisible(true);
            setProgress(progress+1);
            toggleInCheckpoint(false);
          } else {
            setIsAnswerCorrect(false);
            setPopupVisible(true);
          }
        }
      
        function closePopup() {
          setPopupVisible(false);
          props.stateChanger(false);
        }
      
        return (
          <div className="box">
            <h1 className="col-span-3 header">Question: {props.question}</h1>
            <button onClick={() => handleButtonClick(0)} className="button">
                {(props.answerChoices)[0]}
            </button>
            <button onClick={() => handleButtonClick(1)} className="button">
                {(props.answerChoices)[1]}
            </button>
            <button onClick={() => handleButtonClick(2)} className="button">
                {(props.answerChoices)[2]}
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
    
    function Map() {
        
        
        return (
            <div class="background-image">
                <div class="w-[1280px] h-[832px] relative bg-transparent">
                    <div class="left-[85px] top-[235px] absolute">
                        <button onClick={enterCheckpoint}>
                            <Checkpoint type="quiz" color="bg-red-500" number="1"/>
                        </button>
                    </div>
                    <div class="w-[95px] h-[95px] z-10 left-[265px] top-[403px] absolute">
                        <button onClick={enterCheckpoint}>
                            <Checkpoint type="quiz" color="bg-green-500" number="2"/>
                        </button>
                    </div>
                    <div class="w-[95px] h-[95px] z-10 left-[501px] top-[471px] absolute">
                        <button onClick={enterCheckpoint}>
                            <Checkpoint type="quiz" color="bg-blue-500" number="3"/>
                        </button>
                    </div>
                    <div class="w-[95px] h-[95px] left-[701px] z-10 top-[307px] absolute">
                        <button onClick={enterCheckpoint}>
                            <Checkpoint type="quiz" color="bg-purple-500" number="4"/>  
                        </button>
                    </div>
                    <div class="w-[95px] h-[95px] left-[934px] top-[201px] absolute">
                        <button onClick={enterCheckpoint}>
                            <Checkpoint type="quiz" color="bg-orange-500" number="5"/>
                        </button>
                    </div>
                    <div class="top-[351px] left-[1117px] absolute"> 
                        <button>
                            <Assessment />
                        </button>
                    </div>
                    
                    
                    <div class="top-[266px] left-[1028px] absolute">
                        <svg width="143" height="88" viewBox="0 0 143 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.00003C90.6466 4.30554 119.611 24.9255 142 87.5" stroke="black" stroke-dasharray="2 2"/>
                        </svg> 
                        
                    </div>
                    <div class="absolute left-[100px] top-[320px]">
                        <svg width="164" height="139" viewBox="0 0 164 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1C0.5 1 45.5383 143.633 163.5 137.5" stroke="black" stroke-dasharray="2 2"/>
                        </svg> 
                    </div>
                    <div class="left-[350px] top-[250px] absolute ">
                        <svg width="575" height="266" viewBox="0 0 575 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 208C87.2609 187.289 117.166 203.863 149.5 265.5M239 265.5C311.096 242.521 341.899 219.316 361.5 140M426 69.5C462.129 8.74334 493.019 -8.11672 574.5 4.5" stroke="black" stroke-dasharray="2 2"/>
                        </svg> 
                    </div>
                    
                </div>
            </div>
        )
    }
    // Define checkpoints based on progress
    let checkpoints = {1: "checkpoint1", 2: "checkpoint2", 3: "checkpoint3", 4: "checkpoint4", 5: "checkpoint5", 6: "assessment"}
    return (
        <div>
            <h1 class="text-2xl pt-7" align="center">World {world}</h1>
            {inCheckpoint ? <CheckpointPopup question={content[world-1][checkpoints[progress]]["question"]} answer={content[world-1][checkpoints[progress]]["correctAnswer"]} answerChoices={content[world-1][checkpoints[progress]]["answers"]} stateChanger={toggleInCheckpoint}/> : <Map />}
        </div>
    )
    
}

