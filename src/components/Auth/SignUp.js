import React, { useState } from 'react';
import './Login.scss';
import { GrLinkPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { postLogin, postSignup } from '../../Service/apiService';
import { toast } from 'react-toastify';

import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userName, setUserName] = useState();
    const [showHideP, setShowHideP]= useState(false)
    const handleLogin = async () => {
        let data = await postSignup(email,password,userName);
         if (data && data.EC === 0) {
             toast.success(data.EM)
             navigate('/login')
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
          <div className='title col-4 mx-auto'>
              Create Account
          </div>
          <div className='welcome col-4 mx-auto'>
              Let's become user of TQ !
          </div>
          <div className='formLogin col-4 mx-auto'>
              <div className='form-group'>
                  <label>Email</label>
                  <input
                        type='email'
                        placeholder='example@gmail.com'
                      className='form-control inputEmail'
                        value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                  />
                    <label>Password</label>
                    <div className='inputPassword'>
                  <input
                      type={showHideP ? "text":"password"}
                            className='form-control '
                            placeholder='example12345'
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
            
                        />
                        { showHideP ? <FaRegEyeSlash onClick={() => handleShowHide()} /> : <FaRegEye onClick={() => handleShowHide()} />}
                    </div>
                    <label>UserName</label>
                  <input
                      type='text'
                        className='form-control inputEmail'
                        placeholder='Johnny Tham'
                        value={userName}
                      onChange={(e)=> setUserName(e.target.value)}
                  />
                  <div>
                      <button onClick={()=>handleLogin()}>Create account for Thanh Quizz</button>
                  </div>
                  <div className='text-center'>
                      <span onClick={()=> {navigate('/login')}} className='color'><GrLinkPrevious />if you have account go login</span>
                  </div>
                  
              </div>
          </div>
    </div>
  )
}

export default SignUp