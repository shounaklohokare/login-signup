import { toast } from 'react-toastify';


const errorToast = (text: string) => { 
    
    toast.error(text, {
        position: "top-right",
        autoClose: 1069,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

export default errorToast;