const TextInput = ({ label, placeholder, type, value, onChange, textStyle, borderColor, borderRounded }) => {
  return (
    <div className="mb-4">
      {/* Label */}
      {label && (
        <label className={`block text-sm mb-2 ${textStyle}`}>
          {label}
        </label>
      )}
      
      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        value={value} 
        onChange={onChange} 
        className={`w-full px-4 py-2 border ${borderColor} ${borderRounded} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
    </div>
  );
};

export default TextInput;
