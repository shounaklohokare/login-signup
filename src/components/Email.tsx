import { FC } from "react"


interface EmailProps {
    loginText: string
    setLoginText: (val: string) => void
    isVisible?: boolean | undefined
}

const Email:FC<EmailProps> = ({loginText, setLoginText, isVisible}) => {

    return  <div className="relative">
                <input type="text" id="email" value={loginText} onChange={(e) => { setLoginText(e.target.value)}} disabled={!isVisible} className="email-ip peer" placeholder=" " />
                <label htmlFor="email" className="email-lbl">Email</label>
            </div>


}

export default Email;