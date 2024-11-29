import { useState } from 'react';

const App3 = () => {
  const [text, setText] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleCheckPlagiarism = async () => {
    try {
      const response = await fetch('http://localhost:5100/api/plagiarism-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'An error occurred while checking plagiarism.');
      }
  
      setResponse(data);
    } catch (err) {
      setError(err.message);
    }
  };  

  return (
    <div>
      <h1>Plagiarism Checker</h1>
      <textarea
        rows="5"
        placeholder="Enter text to check for plagiarism..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCheckPlagiarism}>Check Plagiarism</button>

      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div style={{ color: 'red' }}>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default App3;
