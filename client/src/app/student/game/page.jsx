
"use client"
import { useState, useEffect } from "react";
import Answer from "./components/answer";

import { Checkpoint } from "./components/checkpoint"; 
import { Assessment } from "./components/assessment";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnEFkLf2Gd_jicpvlF6XtgCrobiAYfB5o",
    authDomain: "team9-cfg.firebaseapp.com",
    projectId: "team9-cfg",
    storageBucket: "team9-cfg.appspot.com",
    messagingSenderId: "440629287793",
    appId: "1:440629287793:web:aca2d5c2f3fb22024eb4d0",
    measurementId: "G-E04K122175"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

  
export default function game() {
    
    const [world, setWorld] = useState(1);
    const [content, setContent] = useState();
    const [inCheckpoint, toggleInCheckpoint] = useState(false);
    const [progress, setProgress] = useState(1);
    // populate content
    
    function Map() {
        const getData = async () => {
            const docRef = doc(db, "curriculums", "f3vN3ODPq2iyTa6Cbsx2");
            const docSnap = await getDoc(docRef);
            setContent(docSnap.data().content);
            // setContent(docSnap.data().content);
        }
        useEffect(() => {getData();}, [content])
        function enterCheckpoint() {
            toggleInCheckpoint(true);
        }
        return (
            <div class="w-[1280px] h-[832px] relative bg-white">
                    <div class="left-[85px] top-[235px] absolute">
                        <button onClick={enterCheckpoint}>
                            <Checkpoint type="quiz"/>
                        </button>
                    </div>
                    <div class="w-[95px] h-[95px] left-[501px] top-[471px] absolute bg-zinc-300 rounded-full">
                        <Checkpoint type="quiz" />
                    </div>
                    <div class="w-[95px] h-[95px] left-[701px] top-[304px] absolute bg-zinc-300 rounded-full">
                        <Checkpoint type="lesson" />  
                    </div>
                    <div class="w-[95px] h-[95px] left-[934px] top-[201px] absolute bg-zinc-300 rounded-full">
                        <Checkpoint type="quiz" />
                    </div>
                    <div class="w-[95px] h-[95px] left-[265px] top-[403px] absolute bg-zinc-300">
                        <Checkpoint type="quiz" />
                    </div>
                    
                    <div class="top-[266px] left-[1028px] absolute">
                        <Assessment />
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
                    <div class="top-[351px] left-[1117px] absolute">
                        <svg width="106" height="100" viewBox="0 0 106 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53 0L65.3483 38.0041H105.308L72.9799 61.4919L85.3282 99.4959L53 76.0081L20.6718 99.4959L33.0201 61.4919L0.691891 38.0041H40.6517L53 0Z" fill="#D9D9D9"/>
                        </svg> 
                    </div>
                </div>
        )
    }
    // Define checkpoints based on progress
    let checkpoints = {1: "checkpoint1", 2: "checkpoint2", 3: "checkpoint3", 4: "checkpoint4", 5: "checkpoint5", 6: "assessment"}
    return (
        <div>
            <h1 class="text-2xl pt-7" align="center">World {world}</h1>
            {inCheckpoint ? <Answer question={content["sections"][world-1][checkpoints[progress]]["question"]}/> : <Map />}
        </div>
    )
    
}

