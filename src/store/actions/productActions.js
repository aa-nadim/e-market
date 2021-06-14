
export const loadProducts = () => {
    return (dispatch) => {
        fetch(`http://localhost:8080/products`)
        .then(res=> res.json())
        .then(data=> {
            dispatch({
                type: 'LOAD_PRODUCTS',
                payload: data
            })
        })
    }
}