import {toast} from 'react-toastify';


class Notify {
    
    error =  (message) => {    
      toast.error(message)
      
    }

    success =  (message) => {
      toast.success(message)
      
    }

}

export default Notify;