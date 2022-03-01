
import {useForm} from "react-hook-form";

import {Link} from "react-router-dom"
import Tilt from 'react-parallax-tilt';

import axios from 'axios';

import React from 'react'

const Forget = () => {
    const {register,handleSubmit} = useForm();

  

  return (
    <>      




            <div className='container uy flex'>


                
                <div className='full'>
                    <Tilt>

                          <div className='card ju'>

                <div className='row'>
                    <div className='col s8 offset-s4 po '> <i class="large material-icons" >file_upload</i></div>
                </div>

                     <form  className='f' onSubmit={handleSubmit(async(data)=>{

axios.put("http://localhost:7070/f",data).then((data)=>{
  console.log(data);
  alert("password updated...!")
}).catch((err)=>{
  console.log("error")
  alert("error.....!")
})

                    
                    let ju = document.getElementById("email");
                    let ji = document.getElementById("pass");
                    ju.value = ""
                    ji.value = ""

                })}>
                    <div className='row'>
                
                        <div >
                            <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="email" type="text" className="validate" {...register("email", { required: true })} />  
                        <label htmlFor="email">Email</label>
                            </div>
                            
                            <div className='input-field col s8  offset-s2'>
                            
                            <input id="pass" type="password" className="validate"{...register("password", { required: true })} />
                            <label htmlFor="pass">Password</label>
                        </div>
                        <div className='row'>
                            <div className='col s4 offset-s4'>
                                 <button className='btn center ff' type='submit' >
                                Update
                            </button>
                            </div>
                           
                        </div>
                           <div className='row'>
                               <div className='col s8 offset-s3'>
                                   <p>Do you want to <Link to={"/"}>Login?</Link></p>
                               </div>
                               </div> 
                        </div>
                    </div>
                </form>
                </div>
                    </Tilt>

                    
              

                </div>
               
            </div>
    </>
  )
}

export default Forget

