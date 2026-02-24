import { profile, edit } from "../assets/icons";
import { ProfileLayout, TextInput, CustomButton } from "../components";
import { useUser } from "../(auth)/UserContext";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const { user } = useUser();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState(user.email || "");
  const [fullName, setFullName] = useState(user.fullName || "");
  const [address, setAddress] = useState(user.address || "");

  const handleProfileUpdate = async () => {
    try {
      const response = await axios.put(
        "https://plagiarism-database-connection-2-24-26.onrender.com/api/update-profile",
        { email, fullName, address },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setSuccess(response.data.message || "Profile updated successfully.");
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile.");
      setSuccess("");
    }
  };

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    try {
      const response = await axios.post(
        "https://plagiarism-database-connection-2-24-26.onrender.com/api/change-password",
        { newPassword },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setSuccess(response.data.message || "Password changed successfully.");
      setError("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to change password.");
      setSuccess("");
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("https://plagiarism-database-connection-2-24-26.onrender.com/api/user-profile", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        setEmail(response.data.email || "");
        setFullName(response.data.fullName || "");
        setAddress(response.data.address || "");
      } catch (err) {
        console.error("Error fetching profile:", err.response?.data?.message || err);
      }
    };

    fetchUserProfile();
  }, [user.token]);

  return (
    <div className="pt-24 lg:padding-x md:px-10">
      <p className="text-center mt-5 text-xl font-semibold mb-1">Personal Information</p>

      <div className="flex max-md:flex-col">
        <div className="lg:w-1/2 max-lg:w-full border mb-5 p-10">
          <ProfileLayout
            profile={profile}
            alt="Profile"
            name={user.username}
          />

          <div className="mt-12 flex">
            <div className="flex flex-col gap-y-2">
              <p className="font-semibold text-base">Full Name:</p>
              <p className="font-semibold text-base">Email:</p>
              <p className="font-semibold text-base">Address:</p>
            </div>

            <div className="flex flex-col gap-y-2 ml-5">
              <p className="text-base">{fullName}</p>
              <p className="text-base">{email}</p>
              <p className="text-base">{address}</p>
            </div>
          </div>

          <div className="mt-5">
            <TextInput
              label="Full Name"
              textStyle="text-black"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              borderColor="border-[#791580]"
              borderRounded="rounded-none"
            />

            <TextInput
              label="Email"
              textStyle="text-black"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              borderColor="border-[#791580]"
              borderRounded="rounded-none"
            />

            <TextInput
              label="Address"
              textStyle="text-black"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              borderColor="border-[#791580]"
              borderRounded="rounded-none"
            />
          </div>

          <CustomButton
            text="Update Profile"
            customStyle="rounded-none bg-[#791580] text-white font-normal px-12 hover:bg-[#6C1972] active:opacity-75 max-md:w-full"
            onClick={handleProfileUpdate}
          />
        </div>

        <div className="lg:w-1/2 max-lg:w-full border mb-5 flex flex-col items-center py-8">
          <p className="text-[#791580] text-lg font-semibold">Change Password</p>

          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}

          <div className="lg:w-full lg:px-20 mt-5 max-md:w-full px-5">
            <TextInput
              label="New Password *"
              textStyle="text-black"
              placeholder="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              borderColor="border-[#791580]"
              borderRounded="rounded-none"
            />

            <TextInput
              label="Confirm Password *"
              textStyle="text-black"
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              borderColor="border-[#791580]"
              borderRounded="rounded-none"
            />
          </div>

          <div className="flex justify-start w-full lg:px-20 max-md:justify-center px-5">
            <CustomButton
              text="Change Password"
              customStyle="rounded-none bg-[#791580] text-white font-normal px-12 hover:bg-[#6C1972] active:opacity-75 max-md:w-full"
              onClick={handlePasswordChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;