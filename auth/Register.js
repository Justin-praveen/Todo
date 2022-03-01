
import {useForm} from "react-hook-form";
import axios from 'axios';
import Tilt from 'react-parallax-tilt';

import {Link} from "react-router-dom"


const Register = () => {
  const {register,handleSubmit} = useForm()

 
  
 
  return (
    <>
 
   
  
        <div className="container uy flex">
            <div className='full'>
<Tilt>
               
                    <div className='card ju'>
                    <div className='row'>
                    <div className='col s8 offset-s5 po '> <i class="large material-icons" >account_circle</i></div>
                </div>  
                <form className='f' onSubmit={handleSubmit(async(datae)=>{

                 await axios.post("http://localhost:7070/reg",datae).then((datas)=>{
                   alert("created sucessfully...!")
                    console.log(datas.data)
                  }).catch((err)=>{
                    console.log("network error..!")

                  })
                    let ju = document.getElementById("email");
                    let ji = document.getElementById("pass");
                    let jo = document.getElementById("Uname");
                    ju.value = ""
                    ji.value = ""
                    jo.value = ""

                })}>
                    <div className='row'>
                        <div >
                        <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="Uname" type="text" className="validate" {...register("uname", { required: true })} />  
                        <label htmlFor="Uname">Uname</label>
                            </div>
                            <div className='input-field col s8  offset-s2'>
                            
                            <input id="email" type="text" className="validate" {...register("email", { required: true })} />  
                        <label htmlFor="email">Email</label>
                            </div>
                            
                            <div className='input-field col s8  offset-s2'>
                            <input id="pass" type="password" className="validate"{...register("password", { required: true })} />
                            <label htmlFor="pass">Password</label>
                        </div>
                            
            
                            
                        <div className='row'>
                            <div className='col s4 offset-s5'>
                                 <button className='btn center ff' type='submit' >
                                Signup
                            </button>
                            </div>
                           
                        </div>
                            
                            <div className='row'>
                                <div className='col s8 offset-s4'>
 <p>Already have a account <Link to={"/"}>Login?</Link></p>
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

export default Register


