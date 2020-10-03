import React, { Component } from 'react';
import FooterApp from '../components/footer';
import Globalheader from '../components/headerglobal'
import Api from "../apiUtils/api";
import {Link} from "react-router-dom";
import SideBarApp from "../components/side";

class Category extends Component {
    constructor(props) {
        super(props);
        this.getCategories();
        this.state={
            categories:[]
        }
    }

    getCategories = async ()=>{
        let api = new Api();
        let data = await api.getData('/categories').then(({data})=>data)
        this.setState({
            categories:data.category
        })
    return data

    }
    render() {

        return (
            <div>
                <Globalheader props={this.props}/>
                <SideBarApp props={this.props}/>
                <br></br>
                <div className="page-content-wrapper">
                    <div className="container">
                        <ul className="page-nav pl-0">
                            {this.state.categories.map((categories)=>(
                                <li key={categories.id}><Link to='/single_category'>{categories.name}<i className="lni lni-chevron-right"></i></Link></li>
                            ))}

                        </ul>
                    </div>
                </div>
                <FooterApp/>
            </div>
        );
    }
}

export default Category;