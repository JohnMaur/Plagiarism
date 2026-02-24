const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-1">
      <div
        style={{ width: `${percentage}%` }}
        className={`h-full ${
          percentage >= 50 ? "bg-red-600" : "bg-green-500"
        } transition-all duration-300`}
      ></div>
    </div>
  );
};

export default ProgressBar;
