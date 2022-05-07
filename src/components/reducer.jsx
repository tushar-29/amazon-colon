export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'ADD_TO_CART':
            return {...state, basket: [...state.basket, action.item],};

        case 'REMOVE_FORM_BASKET':
            const index = state.basket.findIndex((basket_item) => basket_item.id === action.id);
            let new_basket = [...state.basket];
            if(index >= 0) {
                new_basket.splice(index, 1);
            }
            else {
                console.warn(`cant remove (id: ${action.id}) as its not in basket!`);
            }
            return {
                ...state,
                basket: new_basket
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.auth_user
            }

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
    }
};

export default reducer;
