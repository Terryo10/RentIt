import React, { Component } from 'react';
import api from '../apiUtils/api';


class Houses extends Component {
    
    state = { 
        houses:[]
     }
    getproducts =async()=> {
        api.get('/products').then((res)=>{
           this.setState({
               houses:res.data.products.data
           })
           console.log(res)
           
        })
    }
    render() { 
        return ( 
            <div>
            <div>
                <button className="btn btn-success "onClick={this.getproducts}>FETCH HOUSES BABY</button>
            </div>
            <div>
            <ul>
            {this.state.houses.map(houses=><li key={houses.id}>{houses.title}</li>)}
            </ul>
            </div>
            </div>
         );
    }
}
 
export default Houses;