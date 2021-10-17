
export const loadProducts = () => {
    return (dispatch) => {
        fetch(`https://obscure-beach-77356.herokuapp.com/products`)
        .then(res=> res.json())
        .then(data=> {
            dispatch({
                type: 'LOAD_PRODUCTS',
                payload: data
            })
        })
    }
}