const CustomButton = ({ customStyle, textStyle, text, image, onClick }) => {
  return (
    <button
      className={`${customStyle} ${textStyle} py-2.5 px-5 font-semibold rounded-full flex justify-center items-center gap-2`}
      onClick={onClick} // Pass the onClick handler
    >
      {image ? <img src={image} className="w-3 h-3" /> : null}
      {text}
    </button>
  );
};

export default CustomButton;
