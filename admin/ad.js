import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux"
// import Create from './create';

import Users from './users';
import Todo from './todo';

const Ad = () => {

    const [stage,setstage] = useState(0);
    const [un,setun] = useState(null);

  return (
    <>
    {stage === 0 && <Users  us={setun} s={setstage}/>}
    {stage === 1 && <Todo u={un} s={setstage} ss={stage}/>}
    
    </>
  )
}

export default Ad