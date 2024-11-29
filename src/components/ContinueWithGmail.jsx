import { gmail } from "../assets/icons"

const ContinueWithGmail = () => {
  return (
    <div className="mt-4 border border-gray-300 w-full py-3 rounded-lg flex items-center gap-2 px-5 hover:bg-slate-100 cursor-pointer">
      <img 
        src={gmail} 
        alt="Gmail Icon" 
        className="w-4 h-4"
      />
      <p className="text-sm font-semibold text-gray-700 ">Continue with Google</p>
    </div>
  )
}

export default ContinueWithGmail