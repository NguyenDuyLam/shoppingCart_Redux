import React from "react";
import { connect } from "react-redux";
import Cart from "./../components/Cart";
import * as Message from "./../constain/Massage";
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
class CartContainer extends React.Component {
  render() {
    var { cart } = this.props;
    return  <Cart>
                {this.showCartItem(cart)}
                {this.showCartAmount(cart)}
            </Cart>;
  }
  showCartItem = (cart) => {
  var result =<tr><td>{ Message.MSG_CART_EMPTY}</td></tr>
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
  showCartAmount = (cart) => {
    var result = null;
    if(cart.length > 0 ) {
      result = <CartResult cart={cart} />
    } 
    return result;
  }
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
