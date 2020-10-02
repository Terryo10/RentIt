import {toast} from 'react-toastify';


class Notify {
    
    error =  (message) => {
      console.log(message)
      
      toast.error(message)
      
    }

    success =  (message) => {
      console.log(message)
      
      toast.success(message)
      
    }

}

export default Notify;