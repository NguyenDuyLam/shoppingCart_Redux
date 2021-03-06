import React from "react";
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import propTypes from 'prop-types';
class ProductContainer extends React.Component {
    render() {
        var { products } = this.props;
        return(
            <Products >
                {this.showProducts(products)}
            </Products>
        )
    }

    showProducts(products) {
        console.log(products)
        var result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} product= { product } />
            })
        }
        return result;
    }
}

ProductContainer.propTypes = {
    products: propTypes.arrayOf(
        propTypes.shape(
            {
                id: propTypes.number.isRequired,
                name: propTypes.string.isRequired,
                image: propTypes.string.isRequired,
                descrtiption: propTypes.string.isRequired,
                Price: propTypes.number.isRequired,
                inventory: propTypes.number.isRequired,
                ratting: propTypes.number.isRequired
            }
        )
    ).isRequired
}
    


const mapStateToProps = state => {
    return {
        products: state.products     
    }
}

export default connect(mapStateToProps, null)(ProductContainer);