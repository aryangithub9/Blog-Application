import React , { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import url from '../url';
import axios from 'axios'
import { UserContext } from '../context/UserContext';



function Login() {

  const [email,setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Error , setError] = useState("")
  const {setuser} = useContext(UserContext);
 

  const navigate = useNavigate();

  const handlelogin = async () => {
    try {
      const res = await axios.post(url+"/api/auth/login", {password, email},{withCredentials:true});
      setuser(res.data);
      navigate('/')
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className='w-full flex justify-center items-center h-[80vh]'>
      <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
        <h1 className='text-xl font-bold text-left'>Log In To Your Account</h1>
        <input onChange = {(e)=>setemail(e.target.value)}type="text" placeholder='Enter your Email' className='w-full px-4 py-2 border-2 border-black outline-none rounded-lg'/>
        <input onChange={(e)=>setpassword(e.target.value)}type="text" placeholder='Enter your Password' className='w-full px-4 py-2 border-2 border-black outline-none rounded-lg' />
        <button onClick = {handlelogin}className='w-full px-2 py-2 text-xl font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black'>Log In</button>
        {Error? <h3 className='text-red-600'>Something went wrong</h3>:""}
        <div className='flex items-center justify-center space-x-2'>
           <p className='text-sm text-black'>New here?</p>
           <p className="font-semibold text-black sm text-"><Link to="/register" >Register</Link></p>
          </div>
      </div>
      
    </div>
  )
}

export default Login
