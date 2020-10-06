import React ,{Component} from "react";
import HeaderGlobal from "./headerglobal";
import FooterApp from "./footer";
import SideBarApp from "./side";
import Api from "../apiUtils/api";
import {basePic} from "../apiUtils/picture";
import {Link} from "react-router-dom";
import Loading from  "./loading";

class CategorySingle extends Component{
    constructor(props){
        super(props)
        console.log(props);
        this.state={
            properties:[],
            loading:true,
        }
        this.fetchProperty();
    }

    fetchProperty=async()=>{
        let api = new Api();
        let id =this.props.match.params.category_id
        return await api.getData('categories/'+id).then((data)=>{
            if(data.status ===200){
               this.setState({
                   properties:data.data.properties,
                    loading:false
               })
            }
        })
    }
   
    render() {
        return(
            <div>
               <HeaderGlobal props={this.props}/>
                <SideBarApp props={this.props}/>
                <div className="page-content-wrapper">
                    <div className="container">
                    {this.state.loading?<Loading/>:
                             <div>
                                 {!this.state.properties.length?
                                 <h1>Im empty</h1>:
                                <div className="row g-3">
                             {this.state.properties.map((property) => (
                               <div key={property.id} className="col-12 col-md-6">
                                 <div className="card weekly-product-card">
                                   <div className="card-body d-flex align-items-center">
                                     <div className="product-thumbnail-side">
                                       <span className="badge badge-success">RentIt</span>
                                       <Link
                                         className="product-thumbnail d-block"
                                         to={{pathname:'/single_property/',SingleProperty:property}}
                                       >
                                         <img src={basePic+property.imagePath} alt=""></img>
                                       </Link>
                                     </div>
                                     <div className="product-description">
                                       <Link to={{pathname:'/single_property/',SingleProperty:property}} className="product-title d-block" href="/">
                                         {property.title}
                                       </Link>
                                       <p className="sale-price">
                                         <i className="lni lni-dollar"></i>{property.price}
                                       </p>
                   
                                       <Link to={{pathname:'/single_property/',SingleProperty:property}} className="btn btn-success btn-sm add2cart-notify">
                                         <i className="mr-1 lni lni-travel"></i>View Property
                                       </Link>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             ))}</div>
                    }
                             </div>
                           
                    }
                       
                    </div>
                </div>
               <FooterApp/>
            </div>
        )
    }
}
export default CategorySingle;