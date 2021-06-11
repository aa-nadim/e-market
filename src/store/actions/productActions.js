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