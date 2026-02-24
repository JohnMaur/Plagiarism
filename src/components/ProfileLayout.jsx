const ProfileLayout = ({ profile, alt, name }) => {
  return (
    <div className="flex gap-3">
      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-full">
        <img
          src={profile}
          alt={alt}
          className="w-10 h-10"
        />
      </div>
      <div className="flex items-center">
        <p className="text-base">{name}</p>
       
      </div>
    </div>
  )
}

export default ProfileLayout