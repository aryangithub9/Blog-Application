import React, { useState } from 'react'
import {ImCross} from 'react-icons/im'

function CreatePost() {
  const [cat , setcat] = useState("")
  const [cats , setcats] = useState([]);


  const addCategory = ()=>{
    let updatedcats = [...cats  ];
    updatedcats.push(cat);
    setcat('');
    setcats(updatedcats)
  }

  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i, 1); // Remove the item at index i
    setcats(updatedCats); // Update the state
  };
  
  return (
    <div>
    <div className='px-6 md:px-[200px] mt-8'>
       <h1 className='font-bold md:text-2xl text-xl mt-8'>Create A post</h1>
       <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
        <input type="text" placeholder = 'Enter Post Title' className='px-2 py-2 outline-none' />
        <input type="file" className='px-4 ' />
        <div className='flex-col'>
            <div  className='flex items-center space-x-4 md:space-x-8'>
                <input value={cat} onChange={(e)=>setcat(e.target.value)} type="text" className='px-4 py-2 outline-none ' placeholder='Enter Post Category'/>
                <div onClick = {addCategory} className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'>Add</div>
            </div>
        
        <div className='flex px-4 mt-3'>
          {cats?.map((c,i)=>(
            <div key = {i}className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1  rounded-md'>
            <p>{c}</p>
            <p onClick={deleteCategory} className="text-white bg-black rounded-full cursor-pointer p-1 text-sm" ><ImCross/></p>
          </div>
          ))}
          
        </div>
        </div>
          <textarea rows={15} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post Description'/>
          <button className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
       </form>

    </div>
    </div>
  )
}

export default CreatePost
