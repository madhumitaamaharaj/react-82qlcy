
import React  from 'react';

import  { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const inputText = event.target.value;
    const maxLength = 100;

    if (inputText.length <= maxLength) { 
      setInputValue(inputText);
    } else {
      alert(`Character limit exceeded!  ${maxLength} `);
    }
  };

  return (
    <input type="text" value={inputValue} onChange={handleChange} />
  );
}

export default App;

