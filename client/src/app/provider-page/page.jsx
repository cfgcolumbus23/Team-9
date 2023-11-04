'use client';

import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "***REMOVED***",

  authDomain: "team9-cfg-99712.firebaseapp.com",

  projectId: "team9-cfg-99712",

  storageBucket: "team9-cfg-99712.appspot.com",

  messagingSenderId: "673571130811",

  appId: "1:673571130811:web:5d5b97b9929938e5af089e",

  measurementId: "G-728Z36QH6Q"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function MyForm () {
  const [numSections, setNumSections] = useState(1);

  const [sectionData, setSectionData] = useState([
    {
      id: 1,
      parts: [
        { question: '', answers: ['', '', ''], correctAnswer: 0 },
        { question: '', answers: ['', '', ''], correctAnswer: 0 },
        { question: '', answers: ['', '', ''], correctAnswer: 0 },
        { question: '', answers: ['', '', ''], correctAnswer: 0 },
        { question: '', answers: ['', '', ''], correctAnswer: 0 },
      ],
    },
  ]);

  const handleInputChange = (sectionId, partIndex, key, value) => {
    const updatedData = sectionData.map((section) =>
      section.id === sectionId
        ? {
            ...section,
            parts: section.parts.map((part, index) =>
              index === partIndex ? { ...part, [key]: value } : part
            ),
          }
        : section
    );
    setSectionData(updatedData);
  };

  const handleAnswerChange = (sectionId, partIndex, answerIndex, value) => {
    const updatedData = sectionData.map((section) =>
      section.id === sectionId
        ? {
            ...section,
            parts: section.parts.map((part, index) =>
              index === partIndex
                ? {
                    ...part,
                    answers: part.answers.map((ans, ansIndex) =>
                      ansIndex === answerIndex ? value : ans
                    ),
                    correctAnswer: Math.min(
                      answerIndex,
                      Math.max(0, part.correctAnswer)
                    ),
                  }
                : part
            ),
          }
        : section
    );
    setSectionData(updatedData);
  };

  const handleCorrectAnswerChange = (sectionId, partIndex, value) => {
    const updatedData = sectionData.map((section) =>
      section.id === sectionId
        ? {
            ...section,
            parts: section.parts.map((part, index) =>
              index === partIndex ? { ...part, correctAnswer: value } : part
            ),
          }
        : section
    );
    setSectionData(updatedData);
  };

  const handleNumSectionsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumSections(value >= 1 ? value : 1);

    if (value > sectionData.length) {
      const newSections = Array.from(
        { length: value - sectionData.length },
        (_, index) => ({
          id: sectionData.length + index + 1,
          parts: [
            {
              question: '',
              answers: ['', '', ''],
              correctAnswer: 0,
            },
            {
              question: '',
              answers: ['', '', ''],
              correctAnswer: 0,
            },
            { 
              type: 'qa',
              question: '',
              answers: ['', '', ''],
              correctAnswer: 0,},
            {
              question: '',
              answers: ['', '', ''],
              correctAnswer: 0,
            },
            { 
              type: 'qa',
              question: '',
              answers: ['', '', ''],
              correctAnswer: 0, },
          ],
        })
      );

      setSectionData([...sectionData, ...newSections]);
    } else if (value < sectionData.length) {
      setSectionData(sectionData.slice(0, value));
    }
  };


  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sectionData);
    let formData = sectionData;
    let content = [];
    for (let i = 0; i < sectionData.length; i++) {
      content.push({"checkpoint1": {"question": sectionData[i]["parts"][0]["question"], answers: sectionData[i]["parts"][0]["answers"], correctAnswer: sectionData[i]["parts"][0]["correctAnswer"]},
                    "checkpoint2": {"question": sectionData[i]["parts"][1]["question"], answers: sectionData[i]["parts"][1]["answers"], correctAnswer: sectionData[i]["parts"][1]["correctAnswer"]},
                    "checkpoint3": {"question": sectionData[i]["parts"][2]["question"], answers: sectionData[i]["parts"][2]["answers"], correctAnswer: sectionData[i]["parts"][2]["correctAnswer"]},
                    "checkpoint4": {"question": sectionData[i]["parts"][3]["question"], answers: sectionData[i]["parts"][3]["answers"], correctAnswer: sectionData[i]["parts"][3]["correctAnswer"]},
                    "checkpoint5": {"question": sectionData[i]["parts"][4]["question"], answers: sectionData[i]["parts"][4]["answers"], correctAnswer: sectionData[i]["parts"][4]["correctAnswer"]}
                  });
    }
    let databaseEntry = {"name": "null", "content": content};
    console.log(databaseEntry);
    sendToDatabase(databaseEntry);
  };

  async function sendToDatabase(databaseEntry) {
    const docRef = await addDoc(collection(db, "curriculums"), databaseEntry);
    console.log(docRef.id);
  }

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 border rounded shadow bg-white">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Number of Sections:
        </label>
        <div className="flex items-center">
          <input
            type="number"
            value={numSections}
            onChange={handleNumSectionsChange}
            min="1"
            className="form-input w-16"
          />
          <button
            onClick={() => setNumSections(numSections + 1)}
            className="ml-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            +
          </button>
          <button
            onClick={() => setNumSections(Math.max(1, numSections - 1))}
            className="ml-2 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            -
          </button>
        </div>
      </div>
      {sectionData.map((section) => (
        <div key={section.id} className="mb-6">
          <form>
            {section.parts.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Question {index + 1}:
                  </label>
                  <input
                    type="text"
                    value={item.question}
                    onChange={(e) =>
                      handleInputChange(
                        section.id,
                        index,
                        'question',
                        e.target.value
                      )
                    }
                    className="form-input w-full"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Possible Answers:
                  </label>
                  {item.answers.map((answer, ansIndex) => (
                    <div key={ansIndex} className="flex items-center">
                      <div>{`Answer ${ansIndex + 1}:`}</div>
                      <input
                        type="text"
                        value={answer}
                        onChange={(e) =>
                          handleAnswerChange(
                            section.id,
                            index,
                            ansIndex,
                            e.target.value
                          )
                        }
                        className="form-input w-full ml-2"
                      />
                      {ansIndex === item.correctAnswer && (
                        <div className="ml-2">(Correct)</div>
                      )}
                    </div>
                  ))}
                  <div className="mt-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Correct Answer:
                    </label>
                    <select
                      value={item.correctAnswer}
                      onChange={(e) =>
                        handleCorrectAnswerChange(
                          section.id,
                          index,
                          parseInt(e.target.value, 10)
                        )
                      }
                      className="form-select w-full"
                    >
                      <option value={0}>Answer 1</option>
                      <option value={1}>Answer 2</option>
                      <option value={2}>Answer 3</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </form>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Submit
      </button>
    </div>
  );
};

export default MyForm;
