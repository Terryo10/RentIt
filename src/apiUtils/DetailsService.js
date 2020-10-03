import Api from './api';

export const detailsService =(id) =>{
    const api = new Api();

    let detailsUrl = "properties"
    return api.getData(detailsUrl+"/"+id).then(data=>{
        return data
    }).catch(error=>console.log(error))

}