import * as type from './../constain/ActionType';
import  * as Message from './../constain/Massage';
var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action ) => {
   
    
    switch(action.type) {
        
        default : return [...state];
    }
} 


export default message;