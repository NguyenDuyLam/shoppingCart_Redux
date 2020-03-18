import React from 'react';
import Product from './Product';


class Products extends React.Component {
    render() {
    
        return(
                  
            <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                {this.showProducts()}
                
           </div>
        </section>
        )
    }
   
}


export default Products;