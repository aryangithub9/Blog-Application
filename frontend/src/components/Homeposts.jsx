

const HomePosts = ({post}) => {
  return (
    <div className='flex w-full mt-8 space-x-4 '>
    <div className='w-[35%] md:w-[30%] md:h-[200px] h-[200px] flex justify-center items-center'>
        <img src={post.photo} alt="img" className='object-cover w-full h-full'/>
    </div>
    <div className='flex flex-col w-[65%]'>
    <h1 className='mb-1 text-xl font-semibold md:font-bold md:mb-2 md:text-2xl'>
    {post.title}
    </h1>
    <div className='flex mb-2 text-sm font-semibold text-gray-500 sp:ace-x-4 md:mb-4'>
        <p className='mr-4'>{post.username}</p>
        <div className='flex space-x-2 '>
            <p className="hidden md:block">{new Date(post.updatedAt).toString().slice(0,15)}</p>
            <p className="hidden md:block">{new Date(post.createdAt).toString().slice(15,24)}</p>
        </div>
    </div>
    <p className='text-left md:text-lg'>
    {post.desc.slice(0,200)+"..Read More"}
    </p>
        
    </div>
      
    </div>
  )
}

export default HomePosts