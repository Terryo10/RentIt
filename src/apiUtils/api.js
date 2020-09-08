
import axios from "axios";

 const api = axios.create({
    baseURL:'https://buy.designave.co.zw/api/'
})

export default api;