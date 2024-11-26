const CustomButton = ({ customStyle }) => {
  return (
    <div>
      <button className={`${customStyle} py-2.5 px-5 text-white font-semibold rounded-full`}>
        Check for Plagiarism
      </button>
    </div>
  )
}

export default CustomButton