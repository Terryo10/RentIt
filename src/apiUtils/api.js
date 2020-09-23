  import axios from "axios";
const api = axios.create({
  baseURL: "http://192.168.8.101:5000/api/",
});

class Api {
  baseURL = "http://192.168.8.101:5000/api/";


  postData = async (addedurl, item) => {
    const token = await localStorage.getItem('token');
    // console.log(token)
    let requestOptions ={
      headers:{'Authorization':`Bearer ${token}`,
      'content-type':'Application/json'},
      body:JSON.stringify(item)
    }

    let data = await api.post(addedurl, item,requestOptions).then((response) => response);
      console.log(data)
      return data;
  }

  getData = async (addedurl, item) => {
    const token = await localStorage.getItem('token');
    // console.log(token)
    let requestOptions ={
      headers:{'Authorization': `Bearer ${token}`,
        'content-type':'Application/json'},
      body:JSON.stringify(item)
    }
    let data = await api.get(addedurl,requestOptions, item).then((response) => response);

      return data;
  }

 
}
export default Api;
