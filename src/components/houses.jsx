import React, { Component } from 'react';
import api from '../apiUtils/api';


class Houses extends Component {
    
    state = { 
        houses:[]
     };
     constructor(props){
        super(props)
        this.gethouses()
     };
    gethouses =async()=> {
        let data = await api.get("/properties").then(({ data }) => data);
        this.setState({ houses: data.products });
        console.log(data.products)
   
    }
    render() { 
        return ( 
            <div>
            <div>
               
            </div>
            <div>
            <ul>
            {this.state.houses.map(houses=><li key={houses.id}>{houses.city}</li>)}
            </ul>
            </div>
            </div>
         );
    }
}
 
export default Houses;