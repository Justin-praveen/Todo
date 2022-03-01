import axios from "axios";
import React,{useEffect,useState} from "react";

const Show = ({s,uds,ss}) => {

  const [dd,setdd] = useState(null);
  

  const dl =(id)=>{
    const ids = {
      ids : id
    }
    axios.post("",ids).then((data)=>{
      console.log(data);
      alert("deleted done!")

    }).catch((err)=>{
      console.log(err)
      alert("not deleted!")
    })
  }

  useEffect(()=>{
    if(dd === null){
   const t ={
   uname : uds.uname
 }
   axios.post("http://localhost:7070/tda",t).then((datas)=>{
  setdd(datas.data);
   console.log(datas.data)
 }).catch((err)=>{
   console.log(err)
 })

 }
 else{
   console.log("no")
 }
 },[dd])

  const bu = ()=>{
    s(0); 
}

console.log(dd)
   
  return (
    <>
      <nav>
    <div class="nav-wrapper">
    <div className='container'>
         <a  class="brand-logo">TODO</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a onClick={bu}>Add</a></li>
        <li><a href='/'>Logout</a></li>
      </ul>
    </div>
    </div>
  </nav>
  <div>
   {dd !== null ? (<div>{dd.map((d)=><div className="container">
   <div>
     <div className="row">
       <div className="col s12">
 <div class="row">
    <div class="col s12 ">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{d.title}</span>
          <p>{d.text}</p>
          <p>{d._id}</p>
        </div>
        <div class="card-action">
          <a className="btn success" onClick={()=>{
            const ids = {
              ids : d._id
            }
            axios.post("http://localhost:7070/pdel",ids).then((data)=>{
              console.log(data);
              alert(" finished...!");
              s(0)
        
            }).catch((err)=>{
              console.log(err)
              alert("not finished")
            })

          }}>Done</a>
        </div>
      </div>
    </div>
  </div>

       </div>
     </div>
   
</div>
   </div>)}</div>):(<p>data not present</p>)}
  </div>
    </>
  )
}

export default Show