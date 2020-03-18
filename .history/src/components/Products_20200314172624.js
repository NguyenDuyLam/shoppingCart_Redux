import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';


class Products extends React.Component {
    render() {
       
        return(
                  
            <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
               {this.props.children}
                
           </div>
        </section>
        )
    }
  
}


export default Products;