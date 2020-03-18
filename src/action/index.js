import * as types from './../constain/ActionType';


export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actChangMessage = (message) => {
     return {
         type: types.CHANGE_MESSAGE,
         message

     }
}

export const actDeleteProduct = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actUpdateProduct = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}