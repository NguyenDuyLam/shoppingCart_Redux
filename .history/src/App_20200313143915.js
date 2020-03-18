import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
          <Header />
  
   <main id="mainContainer">
          <div className="container">
              <Products />
              <Cart />
      
         </div>
      </main>
        <Footer />
 </div>

    );
  }

}

export default App;
