import { Textinput, ContinueWithGmail } from "../components"

const Login = () => {
  return (
    <div className='pt-32 pb-10 w-full h-full overflow-auto flex justify-center items-center bg-gray-50'>
      <div className='w-[25rem] bg-white p-8 rounded-lg shadow-sm flex items-center flex-col border-[1px] border-solid border-gray-200'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Login</h2>

        <form className='w-full'>
          {/* Name Input */}
          <Textinput 
            label="Username"
            placeholder="Username"
            type="text"
          />

          {/* Password Input */}
          <Textinput 
            label="Password"
            placeholder="Password"
            type="password"
          />

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Login
          </button>
        </form>

        {/* Sign In Link */}
        <p className='text-sm text-gray-600 mt-4'>
          Don't have an account?{' '}
          <a href='/sign-up' className='text-blue-500 hover:underline'>
            Sign Up
          </a>
        </p>

        <ContinueWithGmail 
        
        />
      </div>
    </div>
  )
}

export default Login