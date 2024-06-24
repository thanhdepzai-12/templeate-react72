import React, { useState } from 'react';
import './Login.scss';
import { GrLinkPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../Service/apiService';
import { toast } from 'react-toastify';

import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showHideP, setShowHideP]= useState(false)
    const handleLogin = async () => {
        let data = await postLogin(email, password);
         if (data && data.EC === 0) {
             toast.success(data.EM)
             navigate('/')
    } else if (data && data.EC !== 0) {
      toast.error(data.EM)
    }
    }
    const navigate = useNavigate();
    const handleShowHide = () => {
       setShowHideP(!showHideP)
    }
    return (
      
      <div className='login-container'>
          <div className='header'>
              <span>Don't have an account yet ?</span> 
              <button onClick={()=>{navigate('/signup')}} >Sign up</button>
          </div>
          <div className='title col-4 mx-auto'>
              Thanh Quizz
          </div>
          <div className='welcome col-4 mx-auto'>
              Hello who's this ?
          </div>
          <div className='formLogin col-4 mx-auto'>
              <div className='form-group'>
                  <label>Email</label>
                  <input
                      type='email'
                      className='form-control inputEmail'
                        value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                  />
                    <label>Password</label>
                    <div className='inputPassword'>
                  <input
                      type={showHideP ? "text":"password"}
                      className='form-control '
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
            
                        />
                        { showHideP ? <FaRegEyeSlash onClick={() => handleShowHide()} /> : <FaRegEye onClick={() => handleShowHide()} />}
                        </div>
                  <span>Forgot passwword</span>
                  <div>
                      <button onClick={()=>handleLogin()}>Login Thanh Quizz</button>
                  </div>
                  <div className='text-center'>
                      <span onClick={()=> {navigate('/')}} className='color'><GrLinkPrevious />  go back homepage</span>
                  </div>
                  
              </div>
          </div>
    </div>
  )
}

export default Login