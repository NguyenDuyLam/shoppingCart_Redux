import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';


class Products extends React.Component {
    render() {
        return(
                  
            <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                <Product />
           </div>
        </section>
        
     
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default Products;