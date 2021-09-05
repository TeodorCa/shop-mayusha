const initialState = {
    cartProducts: []
  };

export function cartReducer(state = initialState, action) {

    if (action.type === 'ADD_TO_CART') {
        const newState = {
            ...state,
            cartProducts: [
                ...state.cartProducts,
                action.payload
            ]
        }

        return newState;
    }

    return state;
}