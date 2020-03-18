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