import React from "react";
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import propTypes from 'prop-types';
class CartContainer extends React.Component {
    render() {
        var { cart } = this.props;
        console.log(cart)
        return(
           <Cart />
        )
    }

}

CartContainer.propTypes = {
    cart : propTypes.arrayOf(
       propTypes.shape({
        product : propTypes.shape({
                id: propTypes.number.isRequired,
                name: propTypes.string.isRequired,
                image: propTypes.string.isRequired,
                Price: propTypes.number.isRequired,
                inventory: propTypes.number.isRequired,
                ratting: propTypes.number.isRequired
        }).isRequired,
        quantity: propTypes.number.isRequired
       })
      
    ).isRequired
}
    
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer);