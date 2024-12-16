import axios from "axios";
import { createContext, useEffect, useState } from "react";
import url from "../url";

export const UserContext = createContext({});

export const UserContextProvider=({children})=>{
    const [user, setuser] = useState(null);


    useEffect(()=>{
        getuser()
    },[]);
    
    const getuser=async()=>{
        try {
            const res = await axios.get(url+'/api/auth/refetch', {withCredentials:true})
            setuser(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error)   
        }
       
    }
   
    return <UserContext.Provider value={{user,setuser}}>
                    {children}
            </UserContext.Provider>
}