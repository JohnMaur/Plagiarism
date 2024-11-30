const TextInput = ({ label, placeholder, type, value, onChange }) => {
  return (
    <div className="mb-4">
      {/* Label */}
      {label && (
        <label className="block text-sm text-gray-600 mb-2">
          {label}
        </label>
      )}
      
      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        value={value} // Controlled input value
        onChange={onChange} // Event handler for changes
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TextInput;
