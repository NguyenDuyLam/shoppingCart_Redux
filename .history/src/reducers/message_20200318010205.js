import * as types from './../constain/ActionType';
import  * as Message from './../constain/Massage';
var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action ) => {
   
    
    switch(action.type) {
        case types.CHANGE_MESSAGE:
            return action.message
        default : return [...state];
    }
} 


export default message;