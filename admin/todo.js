
import axios from 'axios';
import React,{useState,useEffect}from 'react';


const Todo = ({u,s}) => {

  const [tda,settda] = useState(null);

  const bu = ()=>{
    s(0); 
}

  useEffect(() => {
    if(tda === null){
      if(u !== null){
  
      const t ={
        uname : u
      }
      console.log(t)
        axios.post("http://localhost:7070/tda",t).then((datas)=>{
       settda(datas.data);
        console.log(datas.data)
        console.log(tda)
      }).catch((err)=>{
        console.log(err)
      })
    }
      }
      else{
        console.log("no")
      }
    
  }, [tda])
  console.log(tda)
  return (
    <>

<nav>
    <div class="nav-wrapper">
    <div className='container'>
         <a  class="brand-logo">TODO</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a onClick={bu}>Users</a></li>
        
        <li><a href='/'>Logout</a></li>
      </ul>
    </div>
     
    </div>
  </nav>
    {tda !== null ? (<div>{tda.map((d)=><div className="container">
   <div>
     <div className="row">
       <div className="col s12">
 <div class="row">
    <div class="col s12 ">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{d.title}</span>
          <p>{d.text}</p>
          
        </div>
        <div class="card-action">
          <a className="btn success" onClick={()=>{
            s(0)
          }}>Done</a>
        </div>
      </div>
    </div>
  </div>

       </div>
     </div>
   
</div>
   </div>)}</div>):(<p>data not present</p>)}
    
    
    </>
  )
}

export default Todo
