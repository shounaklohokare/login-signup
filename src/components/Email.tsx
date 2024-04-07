import { FC } from "react"


interface EmailProps {
    loginText: string
    setLoginText: (val: string) => void
}

const Email:FC<EmailProps> = ({loginText, setLoginText}) => {

    return  <div className="relative">
                <input type="text" id="email" value={loginText} onChange={(e) => { setLoginText(e.target.value)}} className="email-ip peer" placeholder=" " />
                <label htmlFor="email" className="email-lbl">Email</label>
            </div>


}

export default Email;