import { useState } from "react";
import { paste, upload, close, file } from "../assets/icons";
import { IconButton, CustomButton } from "../components";

const Plagiarism = () => {
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [plagiarismResult, setPlagiarismResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to handle paste action
  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
    } catch (error) {
      console.error("Failed to read clipboard content: ", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleCheckPlagiarism = async () => {
    if (!text && !selectedFile) {
      alert("Please provide text or upload a file to check for plagiarism.");
      return;
    }

    setLoading(true);
    const formData = new FormData();

    if (text) {
      formData.append("text", text);
    }

    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      const response = await fetch("https://plagiarism-tf-idf-2-24-26.onrender.com/check-plagiarism", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "An unknown error occurred.");
      }

      const data = await response.json();
      setPlagiarismResult(data);
    } catch (error) {
      console.error("Error checking plagiarism:", error); 
      alert(error.message); // Display the error message to the user
    } finally {
      setLoading(false);
    }
  };

  // Function to clear the input text
  const handleClearInput = () => {
    setText("");
    setSelectedFile(null);
    setPlagiarismResult(null);
  };

  // Determine final result for coloring
  const finalResult = plagiarismResult
    ? plagiarismResult.semanticFlag || Number(plagiarismResult.plagiarismPercentage) >= 50
      ? "Plagarized"
      : "Original"
    : null;

  const labelColor = finalResult === "Plagarized" ? "text-red-700" : "text-green-700";
  const barColor = finalResult === "Plagarized" ? "bg-red-600" : "bg-green-600";

  // For Original text, invert the progress bar 
  const displayPercentage =
    finalResult === "Original"
      ? 50 + (100 - Number(plagiarismResult.plagiarismPercentage)) / 2
      : plagiarismResult?.plagiarismPercentage;

  return (
    <div className="pt-24 lg:padding-x flex max-lg:flex-col gap-10 max-lg:w-full max-lg:px-5">
      <div
        className={`w-[38rem] max-lg:w-full xl:w-3/5 h-[26.4m] ${text || selectedFile ? "bg-white" : "bg-slate-200"} rounded-[30px] border-[1px] border-solid border-slate-300 ${loading ? "opacity-45" : "opacity-100"}`}
      >
        <div className="pt-5 px-5">
          {!selectedFile ? <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text here or upload file to check for plagiarism"
            className={`w-full ${text ? "bg-white h-[21rem]" : "bg-slate-200 h-[16rem]"} text-gray-800 placeholder-gray-500 focus:outline-none resize-none rounded-[10px] p-3`}
          />
            :
            <div className="flex justify-center items-center w-full h-[21.3rem]">
              <div className="py-2 px-10 border-[1px] border-solid border-gray-400 flex justify-center items-center rounded-md gap-2">
                <img
                  src={file}
                  alt="File Icon"
                  className="w-4 h-4"
                />
                <p className="text-base font-semibold">{selectedFile.name}</p>
              </div>

            </div>
          }

        </div>

        <div
          className={`relative bottom-[7rem] flex w-full justify-center gap-4 ${text || selectedFile ? "hidden" : "block"}`}
        >
          <IconButton
            icon={paste}
            iconName="Paste icon"
            iconText="Paste Text"
            onClick={handlePaste}
          />

          <label className="icon-style cursor-pointer">
            <img src={upload} alt="Upload icon" className="w-5 h-5" />
            <p className="text-gray-500 font-semibold mt-[4px] text-base">Upload File</p>
            <input
              type="file"
              accept=".txt, .pdf, .doc, .docx, .jpg, .jpeg, .png"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        <div className={`bg-white w-full h-[4.3rem] rounded-b-[30px] border-t-[1px] border-solid border-slate-300 flex justify-end px-5 items-center`}>
          {text || selectedFile ? (
            <CustomButton
              text="Clear Input"
              textStyle="text-[#242693] max-sm:text-xs"
              customStyle="mr-3 bg-slate-200 hover:bg-slate-300"
              image={close}
              onClick={handleClearInput}
            />
          ) : null}

          <CustomButton
            customStyle={`${text || selectedFile ? "bg-[#242693]" : "bg-[#ABABAB]"} ${!text && !selectedFile ? "bg-[#ABABAB] cursor-not-allowed" : "hover:bg-[#24267E] active:opacity-80 cursor-pointer"}`}
            textStyle="text-white max-sm:text-xs"
            text={loading ? 'Checking...' : 'Check for Plagiarism'}
            onClick={handleCheckPlagiarism}
            disabled={!text && !selectedFile}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="p-2 mb-1">
          {plagiarismResult && (
            <>
              <p className="text-2xl font-semibold">
                {finalResult === "Original"
                  ? `${displayPercentage.toFixed(2)}% Original`
                  : `${plagiarismResult.plagiarismPercentage}% Plagiarized`}
              </p>

              {/* Manual Progress Bar */}
              <div className="w-full h-3 bg-gray-200 rounded-lg overflow-hidden">
                <div
                  className={`${barColor} h-3 rounded-lg`}
                  style={{ width: `${displayPercentage}%` }}
                />
              </div>
            </>
          )}

        </div>

        <div className="w-[28rem] lg:w-[22rem] max-md:w-full xl:w-[34rem] h-[20rem] border-[1px] max-sm:w-full py-4 px-5 border-solid border-slate-300 shadow-sm rounded-[30px] overflow-y-auto">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <div className="w-8 h-8 border-4 border-blue-600 border-solid border-t-transparent rounded-full animate-spin"></div>
              {/* Optional: Add loading text */}
              <p className="ml-2 text-gray-600 font-semibold">Loading...</p>
            </div>
          ) : (
            <div>
              {plagiarismResult &&
                plagiarismResult.results.map((result, index) => (
                  <div key={index} className="bg-white border rounded-md shadow hover:bg-gray-50 mb-3 py-2 px-3">
                    <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                      <span dangerouslySetInnerHTML={{ __html: result.highlightedTitle || result.title }}></span>
                    </a>
                    <p dangerouslySetInnerHTML={{ __html: result.highlightedSnippet || "" }}></p>
                    <p>
                      <strong>Similarity: </strong>{result.snippetSimilarity.toFixed(2)}%
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>

      </div>

    </div >
  );
};

export default Plagiarism;