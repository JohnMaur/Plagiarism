const IconButton = ({ icon, iconText, iconName }) => {
  return (
    <div className={`icon-style`}>
      <img
        src={icon}
        alt={iconName}
        className="w-5 h-5"
      />
      <p className="text-gray-500 font-semibold mt-[4px] text-base">{iconText}</p>
    </div>
  )
}

export default IconButton