import React from "react";
import { connect } from "react-redux";
import Cart from "./../components/Cart";
import * as Message from "./../constain/Massage";
import CartItem from './../components/CartItem';
import propTypes from "prop-types";
class CartContainer extends React.Component {
  render() {
    var { cart } = this.props;
    console.log(cart);
    console.log(cart);
    return  <Cart>
                {this.showCartItem(cart)}
            </Cart>;
  }
  showCartItem = cart => {
    var result = Message.MSG_CART_EMPTY;
    if(cart.length > 0) {
        result = cart.map((item, index) => {
            return (
                <CartItem key={index} item = {item} index = {index} />
            )
        })
    }
    return result;
  };
}

CartContainer.propTypes = {
  cart: propTypes.arrayOf(
    propTypes.shape({
      product: propTypes.shape({
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
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps, null)(CartContainer);
