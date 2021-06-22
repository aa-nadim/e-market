
export const loadProducts = () => {
    return (dispatch) => {
        fetch(`https://boiling-stream-07888.herokuapp.com/products`)
        .then(res=> res.json())
        .then(data=> {
            dispatch({
                type: 'LOAD_PRODUCTS',
                payload: data
            })
        })
    }
}