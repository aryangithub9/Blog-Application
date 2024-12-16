import React , { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import url from '../url';
import axios from 'axios'


function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(url + "/api/auth/register", { username, password, email });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      navigate('/login')
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRegister();
    }
  };

  return (
    <div className='w-full flex justify-center items-center h-[80vh]'>
      <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
        <h1 className='text-xl font-bold text-left'>Create An Account</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyPress}
          type="text"
          placeholder='Enter your Username'
          className='w-full px-4 py-2 border-2 border-black outline-none rounded-lg'
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyPress} 
          type="text"
          placeholder='Enter your Email'
          className='w-full px-4 py-2 border-2 border-black outline-none rounded-lg'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyPress} 
          type="text"
          placeholder='Enter your Password'
          className='w-full px-4 py-2 border-2 border-black outline-none rounded-lg'
        />
        <button onClick={handleRegister} className='w-full px-2 py-2 text-xl font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black'>Register</button>
        {error ? <h3 className='text-red-700'>Something went wrong</h3>:""}
        <div className='flex items-center justify-center space-x-2'>
          <p className='text-sm text-black'>Already have an account</p>
          <p className="font-semibold text-black sm text-"><Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
