  import axios from "axios";
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

class Api {
  baseURL = "http://127.0.0.1:8000/api/";
  basePicture = "";

  postData = async (addedurl, item) => {
    const token = await localStorage.getItem('user');
    let requestOptions ={
      headers:{'Authorised':token,
      'content-type':'Application/json'},
      body:JSON.stringify(item)
    }

    let data = await api.post(addedurl, item,requestOptions).then((response) => response);

      return data;
  }

  getData = async (addedurl, item) => {
    const token = await localStorage.getItem('user');
    let requestOptions ={
      headers:{'Authorised':token,
        'content-type':'Application/json'},
      body:JSON.stringify(item)
    }
    let data = await api.get(addedurl, item,requestOptions).then((response) => response);

      return data;
  }

 
}
export default Api;
