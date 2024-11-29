// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [text, setText] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleCheckPlagiarism = async () => {
//     if (!text.trim()) {
//       setError("Please enter some text.");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setResults([]);

//     try {
//       const response = await axios.post("http://localhost:5000/api/check-plagiarism", {
//         text,
//       });
//       setResults(response.data.results || []);
//     } catch (err) {
//       console.error(err.message);
//       setError("Failed to fetch plagiarism data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Plagiarism Checker</h1>
//       <textarea
//         rows="5"
//         style={{ width: "100%", padding: "10px", margin: "10px 0" }}
//         placeholder="Enter text to check..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       ></textarea>
//       <button onClick={handleCheckPlagiarism} style={{ padding: "10px 20px" }}>
//         {loading ? "Checking..." : "Check Plagiarism"}
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {results.length > 0 && (
//         <div>
//           <h3>Search Results:</h3>
//           <ul>
//             {results.map((result, index) => (
//               <li key={index}>
//                 <a href={result.url} target="_blank" rel="noopener noreferrer">
//                   {result.title}
//                 </a>
//                 <p>{result.snippet}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [text, setText] = useState('');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Handle text input change
//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };

//   // Handle plagiarism check
//   const handleCheckPlagiarism = async () => {
//     setLoading(true);
//     setError('');
//     setResult(null);

//     try {
//       // Send POST request to the Node.js backend
//       const response = await axios.post('http://localhost:5000/api/plagiarism-check', {
//         content: text,
//       });

//       setResult(response.data);
//     } catch (err) {
//       setError('Failed to check plagiarism. Please try again later.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Plagiarism Checker</h1>
//       <textarea
//         value={text}
//         onChange={handleTextChange}
//         placeholder="Enter the text to check for plagiarism..."
//         rows="10"
//         style={{
//           width: '100%',
//           marginBottom: '20px',
//           padding: '10px',
//           fontSize: '14px',
//         }}
//       />
//       <div>
//         <button
//           onClick={handleCheckPlagiarism}
//           disabled={loading}
//           style={{ padding: '10px', fontSize: '16px' }}
//         >
//           {loading ? 'Checking...' : 'Check Plagiarism'}
//         </button>
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {result && (
//         <div>
//           <h3>Plagiarism Check Results:</h3>
//           <pre>{JSON.stringify(result, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// frontend/src/App.jsx

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/hello')
//       .then(response => {
//         setMessage(response.data.message);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Message from Backend: {message}</h1>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [text, setText] = useState('');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResult(null);
    
//     try {
//       const response = await axios.post('http://localhost:5000/api/check-plagiarism', { text });
//       setResult(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       setResult({ error: 'Failed to check plagiarism.' });
//     }
//     setLoading(false);
//   };

//   return (
//     <div>
//       <h1>Plagiarism Checker</h1>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Enter text to check..."
//           rows={10}
//           cols={50}
//           required
//         />
//         <br />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Checking...' : 'Check Plagiarism'}
//         </button>
//       </form>
//       {result && (
//         <div>
//           <h2>Result:</h2>
//           {result.error ? (
//             <p style={{ color: 'red' }}>{result.error}</p>
//           ) : (
//             <pre>{JSON.stringify(result, null, 2)}</pre>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//     const [text, setText] = useState(''); // For user input
//     const [results, setResults] = useState([]); // To store API results
//     const [loading, setLoading] = useState(false); // To show loading state

//     const handleCheckPlagiarism = async () => {
//         if (!text.trim()) {
//             alert('Please enter some text!');
//             return;
//         }

//         setLoading(true);
//         try {
//             const response = await axios.post('http://localhost:5000/check-plagiarism', { text });
//             setResults(response.data.results || []); // Store results from the backend
//         } catch (error) {
//             console.error(error);
//             alert('Error checking plagiarism!');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//             <h1 className="text-4xl font-bold text-blue-600 mb-6">Plagiarism Checker</h1>
//             <textarea
//                 className="w-full max-w-2xl p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter text to check for plagiarism..."
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             ></textarea>
//             <button
//                 onClick={handleCheckPlagiarism}
//                 disabled={loading}
//                 className={`mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 ${
//                     loading ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//             >
//                 {loading ? 'Checking...' : 'Check Plagiarism'}
//             </button>
//             <div className="mt-8 w-full max-w-2xl">
//                 {results.length > 0 ? (
//                     <ul className="space-y-4">
//                         {results.map((result, index) => (
//                             <li
//                                 key={index}
//                                 className="p-4 bg-white border rounded-md shadow hover:bg-gray-50"
//                             >
//                                 <a
//                                     href={result.link}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-blue-600 hover:underline"
//                                 >
//                                     {result.title}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     !loading && <p className="text-gray-600">No results found. Try a different query.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default App;


// Similarity

// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//     const [text, setText] = useState(''); // For user input
//     const [results, setResults] = useState([]); // To store API results
//     const [loading, setLoading] = useState(false); // To show loading state

//     const handleCheckPlagiarism = async () => {
//         if (!text.trim()) {
//             alert('Please enter some text!');
//             return;
//         }

//         setLoading(true);
//         try {
//             const response = await axios.post('http://localhost:5000/check-plagiarism', { text });
//             setResults(response.data.results || []); // Store results from the backend
//         } catch (error) {
//             console.error(error);
//             alert('Error checking plagiarism!');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//             <h1 className="text-4xl font-bold text-blue-600 mb-6">Plagiarism Checker</h1>
//             <textarea
//                 className="w-full max-w-2xl p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter text to check for plagiarism..."
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             ></textarea>
//             <button
//                 onClick={handleCheckPlagiarism}
//                 disabled={loading}
//                 className={`mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 ${
//                     loading ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//             >
//                 {loading ? 'Checking...' : 'Check Plagiarism'}
//             </button>
//             <div className="mt-8 w-full max-w-2xl">
//                 {results.length > 0 ? (
//                     <ul className="space-y-4">
//                         {results.map((result, index) => (
//                             <li
//                                 key={index}
//                                 className="p-4 bg-white border rounded-md shadow hover:bg-gray-50"
//                             >
//                                 <a
//                                     href={result.link}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-blue-600 hover:underline"
//                                 >
//                                     {/* Render the highlighted title */}
//                                     <span
//                                         dangerouslySetInnerHTML={{
//                                             __html: result.highlightedTitle || result.title
//                                         }}
//                                     ></span>
//                                 </a>
//                                 {result.highlightedSnippet && (
//                                     <p
//                                         className="mt-2 text-gray-600"
//                                         dangerouslySetInnerHTML={{
//                                             __html: result.highlightedSnippet
//                                         }}
//                                     ></p>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     !loading && <p className="text-gray-600">No results found. Try a different query.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default App;

// Similarities TFID
// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//     const [text, setText] = useState(''); // For user input
//     const [results, setResults] = useState([]); // To store API results
//     const [loading, setLoading] = useState(false); // To show loading state

//     const handleCheckPlagiarism = async () => {
//         if (!text.trim()) {
//             alert('Please enter some text!');
//             return;
//         }

//         setLoading(true);
//         try {
//             const response = await axios.post('http://localhost:5000/check-plagiarism', { text });
//             setResults(response.data.results || []); // Store results from the backend
//         } catch (error) {
//             console.error(error);
//             alert('Error checking plagiarism!');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//             <h1 className="text-4xl font-bold text-blue-600 mb-6">Plagiarism Checker</h1>
//             <textarea
//                 className="w-full max-w-2xl p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter text to check for plagiarism..."
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             ></textarea>
//             <button
//                 onClick={handleCheckPlagiarism}
//                 disabled={loading}
//                 className={`mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 ${
//                     loading ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//             >
//                 {loading ? 'Checking...' : 'Check Plagiarism'}
//             </button>
//             <div className="mt-8 w-full max-w-2xl">
//                 {results.length > 0 ? (
//                     <ul className="space-y-4">
//                         {results.map((result, index) => (
//                             <li
//                                 key={index}
//                                 className="p-4 bg-white border rounded-md shadow hover:bg-gray-50"
//                             >
//                                 <a
//                                     href={result.link}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-blue-600 hover:underline"
//                                 >
//                                     {/* Render the highlighted title */}
//                                     <span
//                                         dangerouslySetInnerHTML={{
//                                             __html: result.highlightedTitle || result.title
//                                         }}
//                                     ></span>
//                                 </a>
//                                 {result.highlightedSnippet && (
//                                     <p
//                                         className="mt-2 text-gray-600"
//                                         dangerouslySetInnerHTML={{
//                                             __html: result.highlightedSnippet
//                                         }}
//                                     ></p>
//                                 )}

//                                 {/* Display the similarity percentages */}
//                                 <div className="mt-2 text-gray-500 text-sm">
//                                     <p>
//                                         <strong>Title Similarity:</strong> {result.titleSimilarity.toFixed(2)}%
//                                     </p>
//                                     {result.snippetSimilarity && (
//                                         <p>
//                                             <strong>Snippet Similarity:</strong> {result.snippetSimilarity.toFixed(2)}%
//                                         </p>
//                                     )}
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     !loading && <p className="text-gray-600">No results found. Try a different query.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default App;

// TF-IDF 2.0
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [plagiarismPercentage, setPlagiarismPercentage] = useState(null);
  const [plagiarizedText, setPlagiarizedText] = useState('');

  const handleCheckPlagiarism = async () => {
    if (!text.trim()) {
      alert('Please enter some text!');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/check-plagiarism', { text });
      setResults(response.data.results || []);
      setPlagiarismPercentage(response.data.plagiarismPercentage);
      setPlagiarizedText(response.data.plagiarizedText);
    } catch (error) {
      console.error(error);
      alert('Error checking plagiarism!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Plagiarism Checker</h1>
      <textarea
        className="w-full max-w-2xl p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter text to check for plagiarism..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        onClick={handleCheckPlagiarism}
        disabled={loading}
        className={`mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Checking...' : 'Check Plagiarism'}
      </button>

      {plagiarismPercentage !== null && (
        <div className="mt-8 w-full max-w-2xl">
          <div className="p-4 bg-white border rounded-md shadow">
            <p>
              <strong>Plagiarism Result:</strong> {plagiarismPercentage}%
            </p>
            <p className="mt-2">
              <strong>Plagiarized Text:</strong> {plagiarizedText}
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 w-full max-w-2xl">
        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((result, index) => (
              <li key={index} className="p-4 bg-white border rounded-md shadow hover:bg-gray-50">
                <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  <span dangerouslySetInnerHTML={{ __html: result.highlightedTitle || result.title }}></span>
                </a>
                {result.highlightedSnippet && (
                  <p className="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: result.highlightedSnippet }}></p>
                )}
                <div className="mt-2 text-gray-500 text-sm">
                  <p>
                    <strong>Title Similarity:</strong> {result.titleSimilarity.toFixed(2)}%
                  </p>
                  {result.snippetSimilarity && (
                    <p>
                      <strong>Snippet Similarity:</strong> {result.snippetSimilarity.toFixed(2)}%
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p className="text-gray-600">No results found. Try a different query.</p>
        )}
      </div>
    </div>
  );
};

export default App;


// TFID with Graph
// import React, { useState } from 'react';
// import axios from 'axios';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const App = () => {
//     const [text, setText] = useState('');
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [plagiarismRate, setPlagiarismRate] = useState(null);

//     const handleCheckPlagiarism = async () => {
//         if (!text.trim()) {
//             alert('Please enter some text!');
//             return;
//         }

//         setLoading(true);
//         try {
//             const response = await axios.post('http://localhost:5000/check-plagiarism', { text });
//             const apiResults = response.data.results || [];
//             setResults(apiResults);

//             // Simulate plagiarism rate calculation (adjust logic based on backend results)
//             const rate = Math.random() * 100; // Replace with actual calculation
//             setPlagiarismRate(rate);
//         } catch (error) {
//             console.error(error);
//             alert('Error checking plagiarism!');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const graphData = {
//         labels: ['Plagiarism', 'Natural Words'],
//         datasets: [
//             {
//                 label: 'Percentage',
//                 data: plagiarismRate !== null ? [plagiarismRate, 100 - plagiarismRate] : [0, 0],
//                 backgroundColor: ['#ff4d4d', '#4caf50'], // Red for plagiarism, green for natural
//             },
//         ],
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//             <h1 className="text-4xl font-bold text-blue-600 mb-6">Plagiarism Checker</h1>
//             <textarea
//                 className="w-full max-w-2xl p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter text to check for plagiarism..."
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             ></textarea>
//             <button
//                 onClick={handleCheckPlagiarism}
//                 disabled={loading}
//                 className={`mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 ${
//                     loading ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//             >
//                 {loading ? 'Checking...' : 'Check Plagiarism'}
//             </button>

//             {/* Display the bar chart */}
//             {plagiarismRate !== null && (
//                 <div className="mt-8 w-full max-w-lg">
//                     <h2 className="text-lg font-semibold text-gray-700">Plagiarism Analysis</h2>
//                     <Bar
//                         key={plagiarismRate} // Prevent reuse of canvas element
//                         data={graphData}
//                         options={{
//                             indexAxis: 'y', // Horizontal bar chart
//                             responsive: true,
//                             scales: {
//                                 x: { max: 100, title: { display: true, text: 'Percentage' } },
//                             },
//                         }}
//                     />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;

// SVM node libsvm-js
// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [inputText, setInputText] = useState("");
//   const [results, setResults] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleCheckPlagiarism = async () => {
//     setLoading(true);
//     setError(null);
//     setResults(null);

//     if (!inputText.trim()) {
//       setError("Please enter some text!");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/check-plagiarism", {
//         text: inputText,
//       });
//       setResults(response.data);
//     } catch (err) {
//       setError("An error occurred while checking for plagiarism.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">Plagiarism Checker</h1>
//       <textarea
//         rows="10"
//         className="w-full max-w-lg p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         placeholder="Enter text to check for plagiarism..."
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//       />
//       <button
//         className={`mt-4 px-6 py-2 rounded-md text-white font-medium ${
//           loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
//         }`}
//         onClick={handleCheckPlagiarism}
//         disabled={loading}
//       >
//         {loading ? "Checking..." : "Check Plagiarism"}
//       </button>
//       {error && <div className="mt-4 text-red-500">{error}</div>}
//       {results && (
//         <div className="mt-6 bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">Results</h2>
//           {results.isPlagiarized ? (
//             <p className="text-red-600 font-bold">The text is plagiarized.</p>
//           ) : (
//             <p className="text-green-600 font-bold">The text is original.</p>
//           )}
//           <p className="mt-2 text-gray-600">{results.message}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



// // Similarities with 2 text area
// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//     const [text, setText] = useState(''); // For user input
//     const [highlightedText, setHighlightedText] = useState(''); // For showing highlighted plagiarized text
//     const [totalPlagiarism, setTotalPlagiarism] = useState(0); // To store total plagiarism percentage
//     const [loading, setLoading] = useState(false); // To show loading state

//     const handleCheckPlagiarism = async () => {
//         if (!text.trim()) {
//             alert('Please enter some text!');
//             return;
//         }

//         setLoading(true);
//         try {
//             const response = await axios.post('http://localhost:5000/check-plagiarism', { text });
//             const results = response.data.results || [];
            
//             // Calculate total plagiarism percentage
//             let totalSimilarity = 0;
//             let count = 0;

//             results.forEach(result => {
//                 totalSimilarity += result.titleSimilarity;
//                 count += 1;
//             });

//             const averageSimilarity = count > 0 ? totalSimilarity / count : 0;
//             setTotalPlagiarism(averageSimilarity.toFixed(2)); // Set total plagiarism percentage

//             // Update the highlighted text with the first result's highlighted title and snippet
//             setHighlightedText(results[0]?.highlightedTitle || '');

//         } catch (error) {
//             console.error(error);
//             alert('Error checking plagiarism!');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//             <h1 className="text-4xl font-bold text-blue-600 mb-6">Plagiarism Checker</h1>
            
//             {/* Left Text Area (User Input) */}
//             <textarea
//                 className="w-full max-w-2xl p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter text to check for plagiarism..."
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             ></textarea>

//             <button
//                 onClick={handleCheckPlagiarism}
//                 disabled={loading}
//                 className={`mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 ${
//                     loading ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//             >
//                 {loading ? 'Checking...' : 'Check Plagiarism'}
//             </button>

//             {/* Display Total Plagiarism Percentage */}
//             {totalPlagiarism > 0 && (
//                 <div className="mt-4 text-lg font-semibold text-gray-700">
//                     <p>Total Plagiarism: {totalPlagiarism}%</p>
//                 </div>
//             )}

//             <div className="mt-8 flex space-x-6 w-full max-w-4xl">
//                 {/* Left Side: User Input */}
//                 <div className="w-1/2 p-4 bg-white border rounded-md shadow">
//                     <h2 className="font-semibold mb-2">Your Text (Left Side)</h2>
//                     <textarea
//                         className="w-full h-72 p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={text}
//                         readOnly
//                     ></textarea>
//                 </div>

//                 {/* Right Side: Highlighted Plagiarized Text */}
//                 <div className="w-1/2 p-4 bg-white border rounded-md shadow">
//                     <h2 className="font-semibold mb-2">Highlighted Plagiarized Text (Right Side)</h2>
//                     <div
//                         className="w-full h-72 p-4 border rounded-md shadow-sm overflow-auto"
//                         dangerouslySetInnerHTML={{ __html: highlightedText }}
//                     ></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;



// Python Integration

// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//     const [text, setText] = useState(''); // For user input
//     const [results, setResults] = useState([]); // To store API results
//     const [loading, setLoading] = useState(false); // To show loading state
//     const [svmPrediction, setSvmPrediction] = useState(null); // SVM prediction from backend

//     const handleCheckPlagiarism = async () => {
//         if (!text.trim()) {
//             alert('Please enter some text!');
//             return;
//         }

//         setLoading(true);
//         setResults([]);
//         setSvmPrediction(null);

//         try {
//             // Send request to Node.js backend
//             const response = await axios.post('http://localhost:5000/check-plagiarism', { text });

//             // Extract SVM prediction and related data
//             const { svmResult, documents, similarityScores } = response.data;

//             // Update the state with results
//             setResults(
//                 documents.map((doc, index) => ({
//                     document: doc,
//                     similarity: similarityScores[index],
//                 }))
//             );
//             setSvmPrediction(svmResult); // SVM prediction from backend
//         } catch (error) {
//             console.error(error);
//             alert('Error checking plagiarism!');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//             <h1 className="text-4xl font-bold text-blue-600 mb-6">Plagiarism Checker</h1>
//             <textarea
//                 className="w-full max-w-2xl p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter text to check for plagiarism..."
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             ></textarea>
//             <button
//                 onClick={handleCheckPlagiarism}
//                 disabled={loading}
//                 className={`mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 ${
//                     loading ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//             >
//                 {loading ? 'Checking...' : 'Check Plagiarism'}
//             </button>
//             <div className="mt-8 w-full max-w-2xl">
//                 {/* SVM Prediction */}
//                 {svmPrediction !== null && (
//                     <div className="p-4 bg-white border rounded-md shadow text-center mb-4">
//                         <h2 className="text-lg font-semibold">
//                             SVM Prediction: {svmPrediction ? 'Plagiarized' : 'Not Plagiarized'}
//                         </h2>
//                     </div>
//                 )}

//                 {/* Document Similarity Results */}
//                 {results.length > 0 ? (
//                     <ul className="space-y-4">
//                         {results.map((result, index) => (
//                             <li
//                                 key={index}
//                                 className="p-4 bg-white border rounded-md shadow hover:bg-gray-50"
//                             >
//                                 <p className="text-gray-800 font-medium">
//                                     Document {index + 1}: {result.document}
//                                 </p>
//                                 <p className="mt-1 text-gray-600">
//                                     Similarity: {(result.similarity * 100).toFixed(2)}%
//                                 </p>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     !loading && <p className="text-gray-600">No results found. Try a different query.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default App;
