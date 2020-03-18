import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';


class Products extends React.Component {
    render() {
        var {products} = this.props;
        return(
                  
            <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                {this.showProducts(products)}
                
           </div>
        </section>
        )
    }
    showProducts(products) {
        var result = null;
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(Products);