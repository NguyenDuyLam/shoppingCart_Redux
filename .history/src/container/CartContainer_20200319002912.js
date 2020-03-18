import React from "react";
import { connect } from "react-redux";
import Cart from "./../components/Cart";
import * as Message from "./../constain/Massage";
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import {actDeleteProduct, actUpdateProduct} from './../action';
import {  actChangMessage } from './../action/index';
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
                <CartItem key={index} item = {item} index = {index} 
                onChangeMessage = {this.props.onChangeMessage}
                onDeleteProductInCart={this.props.onDeleteProductInCart}
                onUpdateProductInCart = {this.props.onUpdateProductInCartt} />
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
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actDeleteProduct(product));
    },
    onChangeMessage: (message) => {
      dispatch(actChangMessage(message));
    },
    onUpdateProductInCartt: (product, quantity) => {
      dispatch(actUpdateProduct(product, quantity))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
