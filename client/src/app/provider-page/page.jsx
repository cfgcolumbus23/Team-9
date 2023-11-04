'use client';

import React, { useState } from 'react';

const MyForm = () => {
  const [numSections, setNumSections] = useState(1);

  const [sectionData, setSectionData] = useState([
    {
      id: 1,
      parts: [
        { type: 'qa', question: '', answer: '' },
        { type: 'qa', question: '', answer: '' },
        { type: 'content', content: '' },
        { type: 'qa', question: '', answer: '' },
        { type: 'content', content: '' },
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

  const handleSelectChange = (sectionId, partIndex, value) => {
    const updatedData = sectionData.map((section) =>
      section.id === sectionId
        ? {
            ...section,
            parts: section.parts.map((part, index) =>
              index === partIndex
                ? {
                    ...part,
                    type: value,
                    question: '',
                    answer: '',
                    content: '',
                  }
                : part
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
            { type: 'qa', question: '', answer: '' },
            { type: 'qa', question: '', answer: '' },
            { type: 'content', content: '' },
            { type: 'qa', question: '', answer: '' },
            { type: 'content', content: '' },
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
  };

  return (
    <div>
      <div>
        <label>
          Number of Sections:
          <input
            type="number"
            value={numSections}
            onChange={handleNumSectionsChange}
            min="1"
          />
          <button onClick={() => setNumSections(numSections + 1)}>+</button>
          <button onClick={() => setNumSections(Math.max(1, numSections - 1))}>
            -
          </button>
        </label>
      </div>
      {sectionData.map((section) => (
        <div key={section.id}>
          <form>
            {section.parts.map((item, index) => (
              <div key={index}>
                <label>
                  Type:
                  <select
                    value={item.type}
                    onChange={(e) =>
                      handleSelectChange(section.id, index, e.target.value)
                    }
                  >
                    <option value="qa">Question & Answer</option>
                    <option value="content">Content</option>
                  </select>
                </label>
                {item.type === 'qa' ? (
                  <>
                    <div>
                      <label>
                        Question:
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
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        Answer:
                        <input
                          type="text"
                          value={item.answer}
                          onChange={(e) =>
                            handleInputChange(
                              section.id,
                              index,
                              'answer',
                              e.target.value
                            )
                          }
                        />
                      </label>
                    </div>
                  </>
                ) : (
                  <div>
                    <label>
                      Content:
                      <input
                        type="text"
                        value={item.content}
                        onChange={(e) =>
                          handleInputChange(
                            section.id,
                            index,
                            'content',
                            e.target.value
                          )
                        }
                      />
                    </label>
                  </div>
                )}
              </div>
            ))}
          </form>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MyForm;
