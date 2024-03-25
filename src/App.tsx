import { useState } from "react"
import { emailRegex } from "./utils/constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const App = () => {

    const [loginText, setLoginText] = useState("");

    const handleOnClick = () => {

        if(!emailRegex.test(loginText)){

            toast.error('Invalid Email Id, Please try again!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }

    }

    return  (<>
                <div className='login-main-div'>
                    <div className="login-cont">
                        
                        <div className="p-6 md:p-20">
                            <div className="login-header">
                                    Log In
                            </div>
                            <input type="text" className="email-ip" value={loginText} onChange={(e) => { setLoginText(e.target.value)}} placeholder="Enter your email address"/>
                            <div className="login-content">
                                    <div className="font-thin text-cyan-700">Forgot Password</div>

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

                            <div className="mt-12 border-b border-b-gray-300"></div>

                            <p className="divider-text">or log in with</p>

                            <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-y-0">
                                    <button className="alt-login-button">
                                        <img src="google.png" alt="" className="w-9"/>
                                        <span className="font-thin">Google</span>
                                    </button>
                                    <button className="alt-login-button">
                                        <img src="apple.png" alt="" className="w-9"/>
                                        <span className="font-thin">Apple</span>
                                    </button>
                            </div>
                        </div>
                        
                    </div>
                
                </div>
                <ToastContainer/>
             </>)


}

export default App
