import React from 'react'
import ProfilePost from '../components/ProfilePost'

function Profile() {
  return (
    <div>
     <div className="px-8 md:px-[200px] mt-8 md:flex-row flex-row-reverse ">
        <div className='flex flex-col md:w-[70%] w-full mt-8 md:mt-0'>
            <h1 className='text-xl font-bold mb-4'>Your Posts</h1>
            <ProfilePost/>
        </div>

        <div className='flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end'>
        <div className='flex flex-col space-y-4 items-start'>
        <h1 className="text-xl font-bold mb-4">Profile</h1>
        <input type="text" className='outline-none px-4 py-2 text-gray-500' placeholder='Your Username'/>
        <input type="email" className='outline-none px-4 py-2 text-gray-500' placeholder='Your Email' />
        <input type="password" className='outline-none px-4 py-2 text-gray-500' placeholder='Your Password' />    
        <div className="flex items-center space-x-4 mt-8">
            <button className='text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-700'>Update</button>
            <button className='text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-700'>Delete</button>
        </div>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Profile
