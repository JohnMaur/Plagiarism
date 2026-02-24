import { useState } from 'react';
import axios from 'axios';
import { TextInput, ContinueWithGmail } from '../components';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import { useUser } from './UserContext';

const SignUp = () => {
  const { login } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false); 
  const [modalType, setModalType] = useState(''); 
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize the navigate function

  const openModal = (type, message) => {
    setModalType(type); 
    setMessage(message); 
    setModalVisible(true); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      const errorMessage = 'Passwords do not match.';
      openModal('error', errorMessage); 
      return;
    }

    try {
      const response = await axios.post('https://plagiarism-database-connection-2-24-26.onrender.com/api/signup', {
        username,
        password,
      });
      const successMessage = response.data.message;
      openModal('success', successMessage); 

      // Clear input fields after success
      setUsername('');
      setPassword('');
      setConfirmPassword('');

      const { token } = response.data; // Extract token
      login(username, token); // Pass token to context
      setTimeout(() => {
        navigate('/plagiarism-checker');
      }, 1500); 
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'An error occurred. Please try again.';
      openModal('error', errorMessage); 
    } finally {
      setLoading(false); // End loading
    }
  };

  // Close the modal
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="pt-32 pb-10 w-full h-full overflow-auto flex justify-center items-center bg-gray-50">
      <div className="w-[25rem] bg-white p-8 rounded-lg shadow-sm flex items-center flex-col border-[1px] border-solid border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2>

        <form className="w-full" onSubmit={handleSubmit}>
          {/* Name Input */}
          <TextInput
            label="Username"
            textStyle="text-gray-600"
            placeholder="Username"
            borderColor="border-gray-300"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password Input */}
          <TextInput
            label="Password"
            textStyle="text-gray-600"
            placeholder="Password"
            borderColor="border-gray-300"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Confirm Password Input */}
          <TextInput
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading} 
            className={`w-full text-white py-2 rounded-lg focus:outline-none focus:ring-2 ${
              loading
                ? "bg-blue-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500"
            }`}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>

        <ContinueWithGmail />
      </div>

      {/* Modal for error or success message */}
      <Modal
        title={modalType === 'success' ? 'Success' : 'Error'}
        visible={modalVisible}
        onCancel={handleCloseModal} // Close the modal
        footer={null} // No footer buttons
        centered // Center the modal on the screen
      >
        <p>{message}</p>
      </Modal>
    </div>
  );
};

export default SignUp;
