import React,{useState} from 'react';
// import {Link} from "react-router-dom";
import M from "materialize-css/dist/js/materialize";
import im  from "../pic/log.png";
import axios from 'axios';
import {useForm} from "react-hook-form";
import Tilt from 'react-parallax-tilt';

const Home = ({s,uds}) => {

  const {register,handleSubmit} = useForm()

    const [file,setfile] = useState("");
    const [password,setpassword] = useState("");
    
    const su = (e)=>{
      e.preventDefault();
      const u = {
        email : uds.email,
        password : password
      }
        
        axios.put("http://localhost:7070/f",u).then((data)=>{
          console.log(data);
          alert("password updated...!")
        }).catch((err)=>{
          console.log("error")
        })

        let ji = document.getElementById("pass");
        ji.value = ""

    }

    const fil = e =>{
        setfile(e.target.files[0]);
      }
     
      const Sub = async(e)=>{
        e.preventDefault();
        const formd = new FormData();
        formd.append("files",file)
        formd.append("uname",uds.uname);
        console.log(formd)
    
        await axios.post("http://localhost:7070/profile",formd).then((da)=>{
          console.log(da.status)
          alert("uploaded Done...!")
    
        }).catch((err)=>{
    console.log(err)
    
    console.log(file)
})

}

      const ju = ()=>{
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems,{});
        instances.open()
          
      }
      const ch = ()=>{
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems,{});
        instances.open()
      }
      const de = ()=>{
        const ui = {
          uname : uds.uname
        }
        axios.post("http://localhost:7070/udel",ui).then((data)=>{
          console.log(data);
        }).catch((err)=>{
          console.log("error")
        })
      }

     
    //   const pc = ()=>{
    //     var elems = document.querySelectorAll('.modal');
    //     var instances = M.Modal.init(elems,{});
    //     instances.open()
    //   }
    //   const dl= ()=>{
    //     var elems = document.querySelectorAll('.modal');
    //     var instances = M.Modal.init(elems,{});
    //     instances.open()
    //   }
        
    const bu = ()=>{
        s(1); 
        
    }
    console.log(uds)
  return (
      <>

<nav>
    <div class="nav-wrapper">
    <div className='container'>
         <a  class="brand-logo">TODO</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a onClick={bu}>Todos</a></li>
        <li><a data-target="slide-out" class="sidenav-trigger show-on-large" onClick={ju}>Account</a></li>
        <li><a href='/'>Logout</a></li>
      </ul>
    </div>
     
    </div>
  </nav>

  {/* ////////////////////////////////////// */}

  <div className='container uy flex'>


                
<div className='full'>
    <Tilt>

          <div className='card ju'>

<div className='row'>
    <div className='col s8 offset-s4 po '><i class="large material-icons" >assignment</i></div>
</div>

     <form  className='f' onSubmit={handleSubmit(async(data)=>{

       const p = {
         uname : uds.uname,
         title : data.title,
         text : data.text
       }

       axios.post("http://localhost:7070/post",p).then((datas)=>{
         if(datas.data.error){
           alert(datas.data.error)
         }else{
          alert("Added....!")

         }
       })

    
    let ju = document.getElementById("email");
    let ji = document.getElementById("passe");
    ju.value = ""
    ji.value = ""

})}>
    <div className='row'>

        <div >
            <div className='input-field fff col s8  offset-s2'>
            
            <input id="email" type="text" className="validate" {...register("title", { required: true })} />  
        <label htmlFor="email">Title</label>
            </div>
            
            <div className='input-field col s8  offset-s2'>
            <input id="passe" type="text" className="validate"{...register("text", { required: true })} />
            <label htmlFor="passe">Comment</label>
        </div>
        <div className='row'>
            <div className='col s4 offset-s4'>
                 <button className='btn center ff' type='submit' >
                 <i class="large material-icons" >control_point</i>
            </button>
            </div>
           
        </div>
           
        </div>
    </div>
</form>
</div>
    </Tilt>

    


</div>

</div>






  {/* //////////////////////// */}



 <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <img src="https://i.ytimg.com/vi/I8AZnjoJIhU/maxresdefault.jpg"></img>
      </div>
      <a ><center><img class="circle" src={`http://localhost:7070/img/${uds.profile}`}/></center></a>
      <a ><center><span class="white-text name">{uds.uname}</span></center></a>
      <a ><center><span class="white-text email">{uds.email}</span></center></a>
    </div></li>
    <li><a class="waves-effect" data-target="modal1" className="modal-trigger" onClick={ch}><i class="small material-icons" >person</i>Change icon</a></li>
    <li><a class="waves-effect" data-target="modal2" className="modal-trigger" onClick={ch} ><i class="small material-icons" >key</i>Password Change</a></li>
    <li><a class="waves-effect" data-target="modal3" className="modal-trigger"  onClick={ch}><i class="small material-icons" >highlight_off</i>Delete my account</a></li>
  </ul>
{/* ///////////////// */}
  <div id="modal1" class="modal">
      
    <div class="modal-content">
    <form onSubmit={Sub} encType="multipart/form-data">
        <input type="file" filename="files" onChange={fil}/>
        <div class="modal-footer">
     <button type="submit" class="modal-close waves-effect waves-green btn-flat" >submit</button>
    </div>
        
      </form>
    </div>
    
  </div>
{/* /////////////////////////////////////// */}

<div id="modal2" class="modal">
    <div class="modal-content">
    
    <form  className='f' onSubmit={su}>
<div className='row'>

 <div >
     <div className='input-field col s8  offset-s2'>
     <input id="pass" type="password" className="validate" onChange={(e)=>setpassword(e.target.value)} />
     <label htmlFor="pass">Password</label>
 </div>
 <div className='row'>
     <div className='col s4 offset-s4'>
          <div class="modal-footer">
    </div>
          <button className='modal-close waves-effect waves-green btn-flat center ff' type='submit' >
         update...!
     </button>
     </div>
    
 </div>
     
 </div>
</div>
</form>
    </div>
   
  </div>

  {/* /////////////////////////// */}
  <div id="modal3" class="modal">
    <div class="modal-content">
     <center><i class="large material-icons" >account_circle</i></center>
      <center><h5>Are you sure want to delete?</h5></center>
    </div>
    <div class="modal-footer">
      <center><a href='/' class="modal-close red btn-flat" onClick={de}>Delete</a></center>
    </div>
  </div>

  {/* <div id="modal4" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
    </div> */}
  {/* //////////////////////////////// */}

      </>
   
  )
}

export default Home