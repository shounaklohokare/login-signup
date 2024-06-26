import { FC, useState } from "react"
import { ToastContainer } from 'react-toastify';
import Email from "./Email";
import Password from "./Password";
import { Link } from "react-router-dom";
import { emailRegex, passwordRegex, useremail } from "../shared/constants";
import errorToast from "../shared/utils";
import { useNavigate } from "react-router-dom";



const Signup:FC = () => {

    const [loginText, setLoginText] = useState(""); 
    const [password, setPassword] = useState("");     
    const [password2, setPassword2] = useState("");   
    
    const navigate = useNavigate()

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
            return
        }


        if(!passwordRegex.test(password)){
            errorToast('Your password is weak. It must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long. Please try again!')
            return
        }

        if(loginText === useremail){
            errorToast(`User with email ${loginText} already exists. Please log in!`)
            return
        }
  
        navigate("/success");

    }

    return <div className='main-div'>
                <div className="cont">
                    
                    <div className="px-8 py-4 md:p-16">

                        <div className="header">
                                Sign Up
                        </div>  

                        
                        <div className="alt-cont">
                                <button className="alt-login-button">
                                    <img src="google.png" alt="" className="w-7"/>
                                    <span className="font-thin">Sign Up with Google</span>
                                </button>
                                <button className="alt-login-button">
                                    <img src="apple.png" alt="" className="w-7"/>
                                    <span className="font-thin">Sign Up with Apple</span>
                                </button>
                        </div>


                        <div className="h-line">or</div>

                        <Email loginText={loginText} setLoginText={setLoginText}/>
    
                        <Password password={password} setPassword={setPassword} labelText={"Password"}/>

                        <Password password={password2} setPassword={setPassword2} labelText={"Confirm Password"}/>


                        <div className="md:mx-12 md:px-4">
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
                 

                        <div className="text-gray-500 cursor-default text-center mt-4 md:text-left md:mt-12">Already have an account? <span className="text-cyan-700 cursor-pointer"><Link to="/">Log in</Link></span></div>

                    </div>
                    
                </div>
                <ToastContainer/>

            </div>

}

export default Signup;