import React from 'react';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
  
   <main id="mainContainer">
          <div className="container">
            
              <section className="section">
                  <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                  <div className="row">
                    
                      <div className="col-lg-4 col-md-6 mb-r">
                          <div className="card text-center card-cascade narrower">
                              <div className="view overlay hm-white-slight z-depth-1">
                                  <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                                      className="img-fluid" alt="" />
                                  <a>
                                      <div className="mask waves-light waves-effect waves-light"></div>
                                  </a>
                              </div>
                              <div className="card-body">
                                  <h4 className="card-title">
                                      <strong>
                                          <a>Iphone 6 Plus</a>
                                      </strong>
                                  </h4>
                                  <ul className="rating">
                                      <li>
                                          <i className="fa fa-star"></i>
                                      </li>
                                      <li>
                                          <i className="fa fa-star"></i>
                                      </li>
                                      <li>
                                          <i className="fa fa-star"></i>
                                      </li>
                                      <li>
                                          <i className="fa fa-star"></i>
                                      </li>
                                      <li>
                                          <i className="fa fa-star"></i>
                                      </li>
                                  </ul>
                                  <p className="card-text">
                                      Sản phẩm do apply sản xuất
                                  </p>
                                  <div className="card-footer">
                                      <span className="left">15$</span>
                                      <span className="right">
                                          <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                              <i className="fa fa-shopping-cart"></i>
                                          </a>
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              
              <h3>
                  <span className="badge amber darken-2">Mua Hàng Thành Công !</span>
              </h3>
            
              <section className="section">
                  <div className="table-responsive">
                      <table className="table product-table">
                          <thead>
                              <tr>
                                  <th></th>
                                  <th>Sản Phẩm</th>
                                  <th>Giá</th>
                                  <th>Số Lượng</th>
                                  <th>Tổng Cộng</th>
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <th scope="row">
                                      <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                                          alt="" className="img-fluid z-depth-0" />
                                  </th>
                                  <td>
                                      <h5>
                                          <strong>Iphone 6 Plus</strong>
                                      </h5>
                                  </td>
                                  <td>15$</td>
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
                              <tr>
                                  <td colSpan="3"></td>
                                  <td>
                                      <h4>
                                          <strong>Tổng Tiền</strong>
                                      </h4>
                                  </td>
                                  <td>
                                      <h4>
                                          <strong>15$</strong>
                                      </h4>
                                  </td>
                                  <td colSpan="3">
                                      <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                          <i className="fa fa-angle-right right"></i>
                                      </button>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </section>
          </div>
      </main>

      <footer className="page-footer center-on-small-only">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-2 ml-auto">
                      <h5 className="title social-section-title">Social Media</h5>
                      <div className="social-section text-md-left">
                          <ul className="text-center">
                              <li>
                                  <a className="btn-floating  btn-fb waves-effect waves-light">
                                      <i className="fa fa-facebook"></i>
                                  </a>
                              </li>
                              <li>
                                  <a className="btn-floating  btn-ins waves-effect waves-light">
                                      <i className="fa fa-instagram"></i>
                                  </a>
                              </li>
                              <li>
                                  <a className="btn-floating  btn-tw waves-effect waves-light">
                                      <i className="fa fa-twitter"></i>
                                  </a>
                              </li>
                              <li>
                                  <a className="btn-floating  btn-yt waves-effect waves-light">
                                      <i className="fa fa-youtube"></i>
                                  </a>
                              </li>
                              <li>
                                  <a className="btn-floating  btn-li waves-effect waves-light">
                                      <i className="fa fa-linkedin"></i>
                                  </a>
                              </li>
                              <li>
                                  <a className="btn-floating  btn-dribbble waves-effect waves-light">
                                      <i className="fa fa-dribbble left"></i>
                                  </a>
                              </li>
                              <li>
                                  <a className="btn-floating  btn-pin waves-effect waves-light">
                                      <i className="fa fa-pinterest"></i>
                                  </a>
                              </li>
                              <li>
                                  <a className="btn-floating  btn-gplus waves-effect waves-light">
                                      <i className="fa fa-google-plus"></i>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-2">
                      <h5 className="title">Delivery</h5>
                      <ul>
                          <li>
                              <a>Store Delivery</a>
                          </li>
                          <li>
                              <a>Online Delivery</a>
                          </li>
                          <li>
                              <a>Delivery Terms &amp; Conditions</a>
                          </li>
                          <li>
                              <a>Tracking</a>
                          </li>
                      </ul>
                  </div>
                  <div className="col-lg-2">
                      <h5 className="title">Need help?</h5>
                      <ul>
                          <li>
                              <a>FAQ</a>
                          </li>
                          <li>
                              <a>Contact Us</a>
                          </li>
                          <li>
                              <a>Return Policy</a>
                          </li>
                          <li>
                              <a>Product Registration</a>
                          </li>
                      </ul>

                  </div>
                  <div className="col-lg-4">
                      <h5 className="title">Instagram Photos</h5>
                      <ul className="instagram-photos">
                          <li>
                              <div className="view overlay hm-white-slight z-depth-1">
                                  <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" alt="" />
                                  <a>
                                      <div className="mask waves-light waves-effect waves-light"></div>
                                  </a>
                              </div>
                          </li>
                          <li>
                              <div className="view overlay hm-white-slight z-depth-1">
                                  <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" />
                                  <a>
                                      <div className="mask waves-light waves-effect waves-light"></div>
                                  </a>
                              </div>
                          </li>
                          <li>
                              <div className="view overlay hm-white-slight z-depth-1">
                                  <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg" alt="" />
                                  <a>
                                      <div className="mask waves-light waves-effect waves-light"></div>
                                  </a>
                              </div>
                          </li>
                          <li>
                              <div className="view overlay hm-white-slight z-depth-1">
                                  <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(16).jpg" alt="" />
                                  <a>
                                      <div className="mask waves-light waves-effect waves-light"></div>
                                  </a>
                              </div>
                          </li>
                          <li>
                              <div className="view overlay hm-white-slight z-depth-1">
                                  <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg" alt="" />
                                  <a>
                                      <div className="mask waves-light waves-effect waves-light"></div>
                                  </a>
                              </div>
                          </li>
                          <li>
                              <div className="view overlay hm-white-slight z-depth-1">
                                  <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(18).jpg" alt="" />
                                  <a>
                                      <div className="mask waves-light waves-effect waves-light"></div>
                                  </a>
                              </div>
                          </li>
                          <li>
                              <div className="view overlay hm-white-slight z-depth-1">
                                  <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(15).jpg" alt="" />
                                  <a>
                                      <div className="mask waves-light waves-effect waves-light"></div>
                                  </a>
                              </div>
                          </li>
                          <li>
                              <div className="view overlay hm-white-slight z-depth-1">
                                  <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(17).jpg" alt="" />
                                  <a>
                                      <div className="mask waves-light waves-effect waves-light"></div>
                                  </a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="footer-copyright">
              <div className="container-fluid">
                  © 2016 Copyright:
                  <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>
              </div>
          </div>
      </footer>
  </div>

    );
  }

}

export default App;
