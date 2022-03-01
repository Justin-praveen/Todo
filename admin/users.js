import axios from 'axios';
import React,{useState,useEffect}from 'react';

const Users = ({us,s}) => {

  const [uda,setuda] = useState(null);
 

  useEffect(()=>{
      if(uda === null){
      axios.get("http://localhost:7070/udata").then((data)=>{
        setuda(data.data)
        console.log(data)

      })
    }
    else{
      console.log("no data found..!")
    }
  },[uda])
 
  
   
  

  // if(tda === null){
  //   if(uda !== null){

  //     uda.map((da)=>{
  //       setun(da.uname)
  //     })
  //   const t ={
  //     uname : un
  //   }
  //   console.log(t)
  //     axios.post("http://localhost:7070/tda",t).then((datas)=>{
  //    settda(datas.data);
  //     console.log(datas.data)
  //     console.log(uda)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // }
  //   }
  //   else{
  //     console.log("no")
  //   }
  //   console.log(tda)
  
  
  return (
    <>
    <nav>
    <div class="nav-wrapper">
    <div className='container'>
         <a  class="brand-logo">TODO</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href='/'>Logout</a></li>
      </ul>
    </div>
     
    </div>
  </nav>
    {uda !== null ? (<div>{uda.map((d)=><div className="container">
   <div>
     <div className="row">
       <div className="col s12">
 {/* <div class="row">
    <div class="col s12 ">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{d.uname}</span>
          <p>{d.email}</p>
          <p>{d._id}</p>
        </div>
        <div class="card-action">
          <a className="btn success" onClick={()=>{
            us(d.uname)
            s(1)
          }}>Done</a>
        </div>
      </div>
    </div>
  </div> */}

<div class="row">
    <div class="col s8 offset-s2">
      <div class="card">
        <div class="card-image">
          <img width="2%" height="200px" src={`http://localhost:7070/img/${d.profile}`}/>
          <span class="card-title black-text">{d.uname}</span>
        </div>
        <div class="card-content">
          <p>{d.email}</p>
        </div>
        <div class="card-action">
        <a className="btn success" onClick={()=>{
            us(d.uname)
            s(1)
          }}>view</a>
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

export default Users
