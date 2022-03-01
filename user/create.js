// import React,{useState}from 'react';
// import axios from "axios";


// const Create = () => {
  
//   const [file,setfile] = useState("");
//   const [uname,setuname] = useState("");

//   const fil = e =>{
//     setfile(e.target.files[0]);
//   }
 
//   const Sub = async(e)=>{
//     e.preventDefault();
//     const formd = new FormData();
//     formd.append("files",file)
//     formd.append("uname",uname);
//     console.log(formd)

//     await axios.post("http://localhost:7070/profile",formd).then((da)=>{
//       console.log(da.status)

//     }).catch((err)=>{
// console.log(err)

// console.log(file)
//     })

//   }
//   return (
//     <div>

// <form onSubmit={Sub} encType="multipart/form-data">
//         <input type="text" onChange={(e)=>setuname(e.target.value)}/>

//         <input type="file" filename="files" onChange={fil}/>
//         <button type="submit">submit</button>
//       </form>

//     </div>
//   )
// }

 
  

 

// export default Create