import { FC } from 'react'
import { FaUserCheck } from "react-icons/fa";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';


const SuccessfulSignUp:FC = () => {

    const navigate = useNavigate()


    return <div className="main-div text-xl md:text-3xl">
        <div className="absolute top-4 left-6" onClick={() => { navigate("/signup")}}><IoMdArrowRoundBack/></div>
                <FaUserCheck/>
                <span className="pl-3 font-mono">Successfully Signed Up!</span>
        </div>

}

export default SuccessfulSignUp;