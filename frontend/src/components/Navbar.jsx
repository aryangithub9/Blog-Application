import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineSearch } from "react-icons/md";
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import Menu from './Menu';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Navbar() {
  const [promt , setpromt] = useState('');
  const [menu , setmenu]= useState(false);
  const navigate = useNavigate();
  console.log(promt);

  const showmenu=()=>{
    setmenu(!menu);
  }

    const {user} = useContext(UserContext);
   
  return (
    <div className='flex items-center justify-between px-6 md:px-200px py-4'>
        <h1 className=' text-lg md:text-xl font-bold sm:font-semibold'><Link to='/'> <p>Blog</p>
         <p className='hidden sm:inline-block'>Next</p>
         </Link></h1>
        <div className='flex justify-center items-center space-x-0 opacity-95'>
        <input onChange={(e)=>setpromt(e.target.value)}type="text" placeholder='Search A Post' className='outline-none px-3 py-1 '/>
        <p className='cursor-pointer' onClick={()=>navigate(promt?"?search="+promt:navigate('/'))}><BsSearch/></p>
        </div>
        <div className=' hidden md:flex items-center justify-center space-x-2 md:space-x-4 '>
            { user?  <h3><Link to='/write'>Write</Link></h3>:<h3> <Link to='/login'>Login</Link></h3>}
            { user?  <div onClick={showmenu}>
              <p className='cursor-pointer relative'><FaBars/></p>
              {menu?<Menu/>:''}
            </div>  :<h3> <Link to='/register'>Register</Link></h3>}
        </div>
        <div onClick={showmenu}
        className='md:hidden'>
          <p className='cursor-pointer relative'><FaBars/></p>
          {menu?<Menu/>:''}
        </div>
      
    </div>
  )
}

export default Navbar;
