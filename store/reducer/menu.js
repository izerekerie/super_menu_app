import { FETCH_ALL,GETONE } from "../actions/menu";

const initialState={
    items:[],
    item:{}
}

export default (state = {items:[],item:{}}, action) => {
    switch (action.type) {
        case FETCH_ALL:
             return{...state,items:action.payload}
        default:
            return state;
        
    };
}