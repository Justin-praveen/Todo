
import {useForm} from "react-hook-form";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom"
import Tilt from 'react-parallax-tilt';

import axios from 'axios';

import React from 'react'

const Login = () => {
    const {register,handleSubmit} = useForm();

    const send = useDispatch();

    const udata = useSelector((state)=>state.data)

    if(udata !== null){
      udata.map((da)=>{
        console.log(da.data)
      })
    }else{
      console.log("no user found")
    }
    

   
  return (
    <>      




            <div className='container uy flex'>


                
                <div className='full'>
                    <Tilt>

                          <div className='card ju'>

                <div className='row'>
                    <div className='col s8 offset-s4 po '> <i class="large material-icons" >account_circle</i></div>
                </div>

                     <form  className='f' onSubmit={handleSubmit(async(data)=>{

                       axios.post("http://localhost:7070/login",data).then((datas)=>{
                         if(datas.data.error){
                           alert(datas.data.error)
                         }else{
                           send({
                             type : "auth",
                             user : [datas]
                           })

                         }
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
                                login
                            </button>
                            </div>
                           
                        </div>
                           <div className='row'>
                               <div className='col s8 offset-s3'>
                                   <p>Dont have account <Link to={"/register"}>Register?</Link></p>
                               </div>
                               </div> 
                               <div className='row'>
                               <div className='col s8 offset-s3'>
                                   <p>____________OR____________</p>
                               </div>
                               </div>
                               <div className='row'>
                               <div className='col s8 offset-s3'>
                                   <p> Do you want <Link to={"/for"}>Reset password?</Link></p>
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

export default Login

