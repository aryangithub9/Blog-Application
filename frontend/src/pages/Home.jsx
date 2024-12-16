// Home.js
import React, { useEffect, useState } from 'react';
import HomePosts from '../components/Homeposts';
import axios from 'axios';
import url from '../url';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader'
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


function Home() {
  const [posts, setposts] = useState([]);
  const [loader, setloader] = useState(false)
  const [noresult, setnoresult]= useState(false)
  const {search} = useLocation();
  const {user} = useContext(UserContext);
  console.log(user);
  

  const fetchposts = async () => {
    setloader(true)
    try {
      const res = await axios.get(url + '/api/post/'+search);
      setposts(res.data);
      if(res.data.length===0){
        setnoresult(true)
      }
      else{
        setnoresult(false)
      }
      setloader(false)
    } 
    catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => { fetchposts(); }, [search]);

  return (
    <div className='px-8 md:mx-[200px] min-h-[80vh]'>
      {loader?<div className='h-[40vh] flex justify-center items-center'><Loader/></div>:!noresult?posts.map((post) => (
        <>
        <Link to={user? `/posts/post/${post._id}`:'/login'} >
        <HomePosts key={post.id} post={post} />
        </Link>
        </>


      )):<h3 className='text-lg font-semibold text-center'>No Post Found</h3>}
    </div>
  );
}

export default Home;
