import { FaUserCheck } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FC } from "react"
import { useNavigate } from "react-router-dom";

const SuccessfulLogin:FC = () => {

    const navigate = useNavigate()

    return <div className="main-div text-xl md:text-3xl">
        <div className="absolute top-4 left-6" onClick={() => { navigate("/")}}><IoMdArrowRoundBack/></div>
                <FaUserCheck/>
                <span className="pl-3 font-mono">Successfully Logged In!</span>
        </div>

}

export default SuccessfulLogin;