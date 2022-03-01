
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Create from './user/create';
import Login from './auth/Login';
import Register from './auth/Register';
import {useSelector} from "react-redux";

import Sample from './user/Sample';

import Home from './user/Home';
import Show from './user/show';
import Ad from './admin/ad';
import Forget from './auth/Forget';



function App() {

  let hu;
  const swe = useSelector((state)=>state.data);
  if(swe !== null){
    swe.map((da)=>{
      console.log(da.data.admin);
      hu = da.data.admin
    })
  }else{
    console.log("no user found")
  }
  
  return (
    <>
     {
     swe != null && hu === true ? (<Ad/>) : swe != null ?(
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Sample/>}/>
        <Route path="create" element={<Home/>}/>
        <Route path="show" element={<Show/>}/>
      </Routes>
      </BrowserRouter>



    ):(<BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="for" element={<Forget/>}/>
    </Routes>
    </BrowserRouter>
   )
    }
    </>
  );
}

export default App;
