  import axios from "axios";
const api = axios.create({
  baseURL: "http://192.168.8.102:5000/api/",
});

class Api {
  baseURL = "http://192.168.8.102:5000/api/";
  postLoginData = async (addedurl, item) => {
    // console.log(token)
    let data = await api.post(addedurl,item).then((response) => response);
    console.log(data)
    return data;
  }

  postData = async (addedurl, item) => {
    const token = await localStorage.getItem('token');
    // console.log(token)
    console.log(item)
    let requestOptions ={
      headers:{'Authorization':`Bearer ${token}`, 'content-type':'Application/json'},
    }

    let data = await api.post(addedurl,item,requestOptions).then((response) => response);
      console.log(data)
      return data;
  }

  getData = async (addedurl, item) => {
    const token = await localStorage.getItem('token');
    // console.log(token)
    let requestOptions ={
      headers:{'Authorization': `Bearer ${token}`,
        'content-type':'Application/json'},
      // body:JSON.stringify(item)
    }
    let data = await api.get(addedurl,requestOptions, item).then((response) => response);

      return data;
  }

  getUnauthenticatedData = async (addedurl, item) => {
    // console.log(token)
    
    let data = await api.get(addedurl, item).then((response) => response);

      return data;
  }

 
}
export default Api;
