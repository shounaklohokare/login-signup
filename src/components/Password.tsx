import { FC } from "react"

interface PasswordProps{
    password: string
    setPassword: (val: string) => void
    labelText: string
}

const Password:FC<PasswordProps> = ({password, setPassword, labelText}) => {

    return <div className="relative mt-3">
                <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value)}} className="pass-ip peer" placeholder=" " />
                <label htmlFor="password" className="pass-lbl">{labelText}</label>
            </div>

}

export default Password;