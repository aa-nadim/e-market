const initialState = {
    discoverProducts: [],
    productDetails: {}
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_PRODUCTS": {
            const newState = {
                ...state,
                discoverProducts: action.payload
            };
            return newState;
        }
        default: {
            return state;
        }
    }
}
export default ProductsReducer;
     