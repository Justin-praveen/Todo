import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux"
// import Create from './create';
import Home from './Home';
import Show from './show';
import axios from 'axios';

const Sample = () => {

    const [stage,setstage] = useState(0);
    const [ud,setud] = useState(null);
    const [dd,setdd] = useState(null)

    const udata = useSelector((state)=>state.data);

    useEffect(async()=>{
         if(udata !== null){
      udata.map(async(da)=>{
        console.log(da.data);
        setud(da.data);
        await console.log(ud)

      })
    }else{
      console.log("no user found")
    }

  
    },[stage])

 
    
    if(ud === null){
        udata.map(async(da)=>{
            console.log(da.data);
            setud(da.data);
            console.log(dd)
            await console.log(ud)
            console.log(dd)
    
          })
        
    } 
  
    else{
        console.log("notyet data")
    }
  
    console.log(ud)

   
  return (
    <>
    {stage === 0 && <Home uds={ud} s={setstage}/>}
    {stage === 1 && <Show uds={ud} s={setstage} ss={stage}/>}
    
    </>
  )
}

export default Sample