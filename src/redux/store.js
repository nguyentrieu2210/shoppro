import { createStore } from "redux";
const defaultState = {
    num: 1000,
}
const reducer = (state=defaultState, action) => {
    switch(action.type) {
        case "GET NUMBER":
            return {...state, num:Math.round(10*Math.random())};
        case "RESET NUMBER":
            return {...state, num:0};
        default: return state;
    }
}
const store = createStore(reducer);
export default store;