import { useState } from "react";

import { paste, upload } from "../assets/icons"
import { IconButton, CustomButton } from "../components";

const Plagiarism = () => {
  const [text, setText] = useState("");

  return (
    <div className="pt-24 lg:padding-x flex max-lg:flex-col gap-10 max-lg:w-full max-lg:px-5">
      <div className={`lg:w-[38rem] lg:h-[26.4m] ${text ? "bg-white" : "bg-slate-200"
        } rounded-[30px] border-[1px] border-solid border-slate-300`}>
        <div className="pt-5 px-5">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text here or upload file to check for plagiarism"
            className={`w-full ${text ? "bg-white h-[21rem]" : "bg-slate-200 h-[16rem]"
              } text-gray-800 placeholder-gray-500 focus:outline-none resize-none rounded-[10px] p-3`}
          />
        </div>

        <div className={`relative bottom-[7rem] flex w-full justify-center gap-4 ${text ? "hidden" : "block"}`}>
          <IconButton
            icon={paste}
            iconName="Paste icon"
            iconText="Paste Text"
          />

          <IconButton
            icon={upload}
            iconName="Upload icon"
            iconText="Upload Text"
          />
        </div>

        <div className="bg-white w-full h-[4.3rem] rounded-b-[30px] border-t-[1px] border-solid border-slate-300 flex justify-end px-5 items-center">
          <CustomButton 
            customStyle={`${text ? "bg-[#242693]" : "bg-[#ABABAB]"}`}
          />

        </div>
      </div>

      <div className="w-[28rem] h-[20rem] border-[1px] max-sm:w-full border-solid border-slate-300 shadow-sm rounded-[30px]">

      </div>
    </div>
  );
};

export default Plagiarism;
