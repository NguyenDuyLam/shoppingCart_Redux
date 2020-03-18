import React from "react";
import Massage, { MSG_ADD_TO_CART_SUCCESS } from './../constain/Massage'

class Product extends React.Component {
  render() {
    var { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt={product.name} />
            <a>
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>
                {this.showRatting(product.rating)}{" "}
                {this.showNoRatting(product.rating)}
              </li>
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.Price}</span>
              <span className="right">
                <a
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                  onClick={() => this.AddToCart(product)}
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  AddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(MSG_ADD_TO_CART_SUCCESS);
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
}
export default Product;