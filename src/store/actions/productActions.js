import axios from "axios"

export const loadProducts = () => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res=> res.json())
        .then(data=> {
            dispatch({
                type: 'LOAD_PRODUCTS',
                payload: data
            })
        })
    }
}
// export const cartProducts = () => {
//     return (dispatch) => {
//         fetch(`https://jsonplaceholder.typicode.com/photos`)
//         .then(res=> res.json())
//         .then(data=> {
//             dispatch({
//                 type: 'ADD_TO_CART',
//                 payload: data
//             })
//         })
//     }
// }