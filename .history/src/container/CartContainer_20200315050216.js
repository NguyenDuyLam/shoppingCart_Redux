import React from "react";
import { connect } from "react-redux";
import Cart from "./../components/Cart";
import * as Message from "./../constain/Massage";
import CartItem from './../components/CartItem';
import PropTypes from "prop-types";
class CartContainer extends React.Component {
  render() {
    var { cart } = this.props;
    return  <Cart>
                {this.showCartItem(cart)}
            </Cart>;
  }
  showCartItem = (cart) => {
    var result = Message.MSG_CART_EMPTY;
    if(cart.length > 0) {
        console.log(cart.length);
        result = cart.map((item, index) => {
            return (
                <CartItem key={index} item = {item} index = {index} />
            )
        })
    }
    return result;
  };
}

// CartContainer.propTypes = {
//   cart: PropTypes.arrayOf(
//     PropTypes.shape({
//       product: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//         descrtiption: PropTypes.string.isRequired,
//         Price: PropTypes.number.isRequired,
//         inventory: PropTypes.number.isRequired,
//         ratting: PropTypes.number.isRequired
//       }).isRequired,
//       quantity: PropTypes.number.isRequired
//     })
//   ).isRequired
// };

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps, null)(CartContainer);
