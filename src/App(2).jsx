import React, { useState } from "react";

const App2 = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    // Example: Send the file to an API endpoint (replace with your actual backend endpoint)
    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("File uploaded successfully:", data);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  return (
    <div>
      <h2>Upload a Document</h2>
      <input
        type="file"
        accept=".doc,.docx,.pdf,.txt"
        onChange={handleFileChange}
      />
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
        </div>
      )}
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default App2;
