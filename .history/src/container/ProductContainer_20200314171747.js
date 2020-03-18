import React from "react";
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
class ProductContainer extends React.Component {
    render() {
        var { products } = this.props;
        return(
            <Products>
                {this.showRatting(products.rating)}
                {this.showNoRatting(products.rating)}
                {this.showProducts(products)}
            </Products>
        )
    }
    showRatting(rating) {
        var result = [];
        for (var i = 1; i <= rating; i++) {
          result.push(<i key={i} className="fa fa-star"></i>);
        }
        return result;
      }
      showNoRatting(rating) {
        var result = [];
        for (var i = 1; i <= 5 - rating; i++) {
          result.push(<i key={i} className="fa fa-star-o"></i>);
        }
        return result;
      }
      showProducts(products) {
        var result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} product= { product } />
            })
        }
        return result;
    }
}



const mapStateToProps = state => {
    return {
        products: state.products     
    }
}

export default connect(mapStateToProps, null)(ProductContainer);