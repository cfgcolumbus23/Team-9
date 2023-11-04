'use client';

import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState([
    { type: 'qa', question: '', answer: '' },
    { type: 'qa', question: '', answer: '' },
    { type: 'content', content: '' },
    { type: 'qa', question: '', answer: '' },
    { type: 'content', content: '' },
  ]);

  const handleInputChange = (index, key, value) => {
    const updatedData = [...formData];
    updatedData[index][key] = value;
    setFormData(updatedData);
  };

  const handleSelectChange = (index, value) => {
    const updatedData = [...formData];
    updatedData[index] = { type: value, content: '' };
    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the formData, e.g., send it to a server
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((item, index) => (
        <div key={index}>
          <label>
            Type:
            <select
              value={item.type}
              onChange={(e) => handleSelectChange(index, e.target.value)}
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
                      handleInputChange(index, 'question', e.target.value)
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
                      handleInputChange(index, 'answer', e.target.value)
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
                    handleInputChange(index, 'content', e.target.value)
                  }
                />
              </label>
            </div>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
