const Textinput = ({ label ,placeholder, type }) => {
  return (
    <div className="mb-4">
      <label className='block text-sm text-gray-600 mb-2'>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  )
}

export default Textinput