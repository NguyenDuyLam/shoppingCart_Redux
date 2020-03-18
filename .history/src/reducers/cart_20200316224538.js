import * as type from './../constain/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product : {
            id: 1,
            name: 'Inphone 7 plus',
            image: 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-400x400.jpg',
            descrtiption: " New ",
            Price: 500,
            Inventory: 10,
            rating: 4
        },
        quantity: 5
    }, 
    {
        product:  {
            id: 3,
            name: 'Inphone 9 plus',
            image: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-8-plus-quoc-te-mau-trang-didongviet.jpg',
            descrtiption: " New ",
            Price: 700,
            Inventory: 10,
            rating: 3
        },
        quantity: 3
    }
];


const cart = (state = initialState, action ) => {
   
    var {product, quantity} = action;
    var index = -1;
    switch(action.type) {
        case type.ADD_TO_CART:
            index = findProductInCart(state, product);
            if(index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
          
            return [...state];
        default : return [...state];
    }
} 
var findProductInCart = (cart, product) => {
    var index = -1;
    if(cart.length > 0) {
        for(var i = 0; i < cart.length; i++) {
            if(cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;