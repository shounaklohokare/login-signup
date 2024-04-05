import { FC } from "react"

interface PasswordProps{
    password: string
    setPassword: (val: string) => void
    labelText: string
}

const Password:FC<PasswordProps> = ({password, setPassword, labelText}) => {

    return <div className="relative mt-3">
                <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value)}} className="block p-6 w-full text-md text-gray-900  bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " />
                <label htmlFor="password" className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-white focus px-2 peer-focus:px-2 text-md peer-focus:text-gray-600 font-sans peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{labelText}</label>
            </div>

}

export default Password;