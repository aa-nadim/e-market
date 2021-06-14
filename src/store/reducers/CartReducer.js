const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0
}
const CartReducer = (state = initialState, action) => {
    let findPro;
    let index;
    switch(action.type){
        case 'ADD_TO_CART':
            const { targetedProduct, quantity } = action.payload;
            // console.log(targetedProduct, quantity);
            const check = state.products.find(product => product._id === targetedProduct._id);
            if(check){
                return state;
            } else {
                const Tprice = state.totalPrice + (450 * quantity);
                const Tquantities = state.totalQuantities + quantity;
                targetedProduct.quantity = quantity;
                return {
                    ...state, products: [...state.products, targetedProduct],totalPrice: Tprice, totalQuantities: Tquantities
                }
            }
        case 'INC':
            findPro = state.products.find(product => product._id === action.payload);
            index = state.products.findIndex(product => product._id === action.payload);
            findPro.quantity += 1;
            state.products[index] = findPro;
            return {
                ...state,
                totalPrice: state.totalPrice + 450, totalQuantities: state.totalQuantities+1
            }
        case "DEC":
            findPro = state.products.find(product => product._id === action.payload);
            index = state.products.findIndex(product => product._id === action.payload);
            if(findPro.quantity > 1){
                findPro.quantity -= 1;
                state.products[index] = findPro;
                return {
                    ...state,totalPrice: state.totalPrice - 450, totalQuantities: state.totalQuantities - 1
                }
            } else {
                    return state;
            }
        case 'REMOVE':
            findPro = state.products.find(product => product._id === action.payload);
            const filtered = state.products.filter(product => product._id !== action.payload);
            return {
                ...state,
                products: filtered,
                totalPrice: state.totalPrice - 450 * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
            }
        default: 
            return state;
    }
}
export default CartReducer;