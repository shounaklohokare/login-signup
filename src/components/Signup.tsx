import { useState } from "react"
import { ToastContainer } from 'react-toastify';
import Email from "./Email";
import Password from "./Password";
import { Link } from "react-router-dom";
import { emailRegex } from "../shared/constants";
import errorToast from "../shared/utils";


const Signup = () => {

    const [loginText, setLoginText] = useState(""); 
    const [password, setPassword] = useState("");     
    const [password2, setPassword2] = useState("");   
    
   

    const handleOnClick = () => {

        if(loginText === '' || password === '' || password2 == ''){
            errorToast('All fields are required, Please try again!')
            return
        }


        if(!emailRegex.test(loginText)){
            errorToast('Invalid Email Id, Please try again!')
            return
        }

    
        if(password !== password2){

            errorToast('Passwords do not match, Please try again!')
        }

  

    }

    return <div className='main-div'>
                <div className="cont">
                    
                    <div className="p-cont">

                        <div className="header">
                                Sign Up
                        </div>  

                        
                        <div className="flex flex-col space-y-6">
                                <button className="alt-login-button">
                                    <img src="google.png" alt="" className="w-9"/>
                                    <span className="font-thin">Sign Up in with Google</span>
                                </button>
                                <button className="alt-login-button">
                                    <img src="apple.png" alt="" className="w-9"/>
                                    <span className="font-thin">Sign Up with Apple</span>
                                </button>
                        </div>


                        <div className="h-line">or</div>

                        <Email loginText={loginText} setLoginText={setLoginText} isVisible={true}/>
    
                        <Password password={password} setPassword={setPassword} labelText={"Password"}/>

                        <Password password={password2} setPassword={setPassword2} labelText={"Confirm Password"}/>


                        <div className="md:mx-16 md:px-4">
                            <button className="signup-button" onClick={handleOnClick}>
                                        <span>Sign Up</span>
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
                 

                        <div className="text-gray-500 cursor-default text-center mt-6 md:text-left md:mt-12">Already have an account? <span className="text-cyan-700 cursor-pointer"><Link to="/">Sign in</Link></span></div>

                    </div>
                    
                </div>
                <ToastContainer/>

            </div>

}

export default Signup;