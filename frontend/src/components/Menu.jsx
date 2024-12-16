import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from 'axios';
import url from '../url';

function Menu() {

  const {user} = useContext(UserContext);
  const {setuser} = useContext(UserContext);
  

  const handlelogout=async()=>{
    try {
      const res =  axios.get(url+ "/api/auth/logout" , {withCredentials:true});
      console.log(res);
      setuser(null);
      
    } catch (error) {
      
    }
  }

 
  return (
    <div className='bg-slate-900 hover:bg-slate-800 w-[200px] flex flex-col items-start absolute top-12 right-6 p-3 rounded-md space-y-4'>
      {!user ? (
        <>
          <h3 className='text-white'><Link to={'/login'}>Login</Link></h3>
          <h3 className='text-white'><Link to={'/register'}>Register</Link></h3>
        </>
      ) : (
        <>
          <h3 className='text-white'><Link to={'/'}>Write</Link></h3>
          <h3 className='text-white'><Link to={'/'}>Profile</Link></h3>
          <h3 className='text-white'><Link to={'/register'}>My Blogs</Link></h3>
          <h3 onClick={handlelogout} className='text-white text-md  cursor-pointer'>Logout</h3>
        </>
      )}
    </div>
  );
}

export default Menu;