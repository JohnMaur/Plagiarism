const PlagiarismBenefit = ({ title, context, icon, iconName }) => {
  return (
    <div className="flex flex-col items-center">
      <img 
        src={icon} 
        alt={iconName} 
        className="w-12 h-12 mb-4"
      />

      <h1 className="text-center font-bold text-2xl mb-3 text-gray-700">{title}</h1>
      <p className="text-center text-base font-semibold text-gray-500">{context}</p>
    </div>
  )
}

export default PlagiarismBenefit