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
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Type:
                </label>
                <select
                  value={item.type}
                  onChange={(e) =>
                    handleSelectChange(section.id, index, e.target.value)
                  }
                  className="form-select w-full"
                >
                  <option value="qa">Question & Answer</option>
                  <option value="content">Content</option>
                </select>
                {item.type === 'qa' ? (
                  <>
                    <div className="mt-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Question:
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
                        Answer:
                      </label>
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
                        className="form-input w-full"
                      />
                    </div>
                  </>
                ) : (
                  <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Content:
                    </label>
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
                      className="form-input w-full"
                    />
                  </div>
                )}
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
