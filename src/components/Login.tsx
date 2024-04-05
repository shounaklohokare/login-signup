import { useState } from "react"
import { emailRegex } from "../shared/constants";
import { ToastContainer } from 'react-toastify';
import Email from "./Email";
import Password from "./Password";
import { Link } from "react-router-dom";
import errorToast from "../shared/utils";

const Login = () => {

    const [loginText, setLoginText] = useState(""); 
    const [password, setPassword] = useState("");    
    const [isVisible, setIsVisible] = useState(true);    


    const handleOnClick = () => {

        if(!emailRegex.test(loginText)){
            errorToast('Invalid Email Id, Please try again!')
            return
        }

        setIsVisible(false)

    }

    return <div className='main-div'>
                <div className="cont">
                    
                    <div className="p-cont">

                        <div className="header">
                                Log In
                        </div>  

                        
                        {isVisible ? (<div className="flex flex-col space-y-6">
                                <button className="alt-login-button">
                                    <img src="google.png" alt="" className="w-9"/>
                                    <span className="font-thin">Log in with Google</span>
                                </button>
                                <button className="alt-login-button">
                                    <img src="apple.png" alt="" className="w-9"/>
                                    <span className="font-thin">Log in with Apple</span>
                                </button>
                        </div>) : null}


                        {isVisible ? (<div className="h-line">or</div>) : null}

                        <Email loginText={loginText} setLoginText={setLoginText} isVisible={isVisible}/>
    
                        {!isVisible ? (<Password password={password} setPassword={setPassword} labelText={"Password"}/>) : null}


                        <div className="login-box">
                                <div className="font-thin ml-[1px] text-cyan-700 cursor-pointer">Forgot Password</div>

                                <button className="login-button" onClick={handleOnClick}>
                                    <span>Log In</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-7"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="#ffffff"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line x1="13" y1="18" x2="19" y2="12" />
                                        <line x1="13" y1="6" x2="19" y2="12" />
                                    </svg>
                                </button>
                        </div>

                        <div className="text-gray-500 cursor-default text-center mt-6 md:text-left md:mt-12">Don't have an account? <span className="text-cyan-700 cursor-pointer"><Link to="signup">Sign up</Link></span></div>

                    </div>
                    
                </div>
                <ToastContainer/>

            </div>

}

export default Login;