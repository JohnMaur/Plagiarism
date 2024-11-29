import { useState } from "react";
import { paste, upload, close, file } from "../assets/icons";
import { IconButton, CustomButton } from "../components";

const Plagiarism = () => {
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

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

  // Function to clear the input text
  const handleClearInput = () => {
    setText("");
    setSelectedFile(null);
  };

  return (
    <div className="pt-24 lg:padding-x flex max-lg:flex-col gap-10 max-lg:w-full max-lg:px-5">
      <div
        className={`lg:w-[38rem] lg:h-[26.4m] ${text || selectedFile ? "bg-white" : "bg-slate-200"
          } rounded-[30px] border-[1px] border-solid border-slate-300`}
      >
        <div className="pt-5 px-5">
          {!selectedFile ? <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text here or upload file to check for plagiarism"
            className={`w-full ${text ? "bg-white h-[21rem]" : "bg-slate-200 h-[16rem]"
              } text-gray-800 placeholder-gray-500 focus:outline-none resize-none rounded-[10px] p-3`}
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
              accept=".txt, .pdf, .doc, .docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        <div className="bg-white w-full h-[4.3rem] rounded-b-[30px] border-t-[1px] border-solid border-slate-300 flex justify-end px-5 items-center">
          {text || selectedFile ? (
            <CustomButton
              text="Clear Input"
              textStyle="text-[#242693]"
              customStyle="mr-3 bg-slate-200 hover:bg-slate-300"
              image={close}
              onClick={handleClearInput}
            />
          ) : null}

          <CustomButton
            customStyle={`${text ? "bg-[#242693]" : "bg-[#ABABAB]"} hover:bg-[#24267E] active:opacity-80`}
            textStyle="text-white"
            text="Check for Plagiarism"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="text-2xl font-semibold p-2">80% Plagiarized Content</p>
        <div className="w-[28rem] h-[20rem] border-[1px] max-sm:w-full border-solid border-slate-300 shadow-sm rounded-[30px] overflow-y-auto">

        </div>
      </div>

    </div>
  );
};

export default Plagiarism;