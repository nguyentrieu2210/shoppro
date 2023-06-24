import { ADD_TO_CART, UPDATE_CART , DELETE_ITEM_CART} from "../../shared/contants/action-type";
const initState = {
    items: [],
}

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:return addItem(state, action.payload);
        case UPDATE_CART: return updateCart(state, action.payload);
        case DELETE_ITEM_CART: return deleteItemCart(state, action.payload);
        default:
            return state;
    }
}
const deleteItemCart = (state, payload) => {
    const items = state.items;
    const newItemCarts = items.filter((item)=> {
        return item._id!=payload._id;
    });
    return {...state, items: newItemCarts};
}
const updateCart = (state, payload) => {
    const items = state.items;

    const newCarts = items.map((item) => {
        if (item._id === payload._id) {
            item.qty = payload.qty;
        }
        return item;
    });
    return { ...state, items: newCarts }
}

const addItem = (state, payload) => {
    const items = state.items;
    let isProductExists = false;
    items.map((item, index) => {
        if (item._id === payload._id) {
            item.qty += payload.qty;
            isProductExists = true;
        }
        return item;
    });

    const newItems = isProductExists ? items : [...items, payload];
    localStorage.setItem("cart_items", JSON.stringify(newItems));
    return { ...state, items: newItems };
}
