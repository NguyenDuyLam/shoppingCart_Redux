import React from 'react';
class CartItem extends React.Component {
    render() {
        var { item } = this.props;
        console.log(item)
        return(
            <tr>
            <th scope="row">
                <img src={item.product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.Price}</td>
            <td className="center-on-small-only">
                <span className="qty">1 </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>15$</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item">
                    X
                </button>
            </td>
        </tr>
     
        )
    }
}
export default CartItem;