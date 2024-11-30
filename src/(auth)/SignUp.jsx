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
  const [modalVisible, setModalVisible] = useState(false); // Track modal visibility
  const [modalType, setModalType] = useState(''); // Success or Error type

  const navigate = useNavigate(); // Initialize the navigate function

  const openModal = (type, message) => {
    setModalType(type); // Set the modal type (success or error)
    setMessage(message); // Set the message to display
    setModalVisible(true); // Show the modal
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      const errorMessage = 'Passwords do not match.';
      openModal('error', errorMessage); // Show error modal
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/signup', {
        username,
        password,
      });
      const successMessage = response.data.message;
      openModal('success', successMessage); // Show success modal

      // Clear input fields after success
      setUsername('');
      setPassword('');
      setConfirmPassword('');

      const { token } = response.data; // Extract token
      login(username, token); // Pass token to context
      setTimeout(() => {
        navigate('/plagiarism-checker'); // Navigate to plagiarism checker
      }, 1500); // Optional delay to allow user to see the success message
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'An error occurred. Please try again.';
      openModal('error', errorMessage); // Show error modal
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
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password Input */}
          <TextInput
            label="Password"
            placeholder="Password"
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
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
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
