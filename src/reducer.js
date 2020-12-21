export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0)
}

function reducer(state, action){
    console.log(action);
    switch(action.type){ 
        case "SET_USER":
            return {
                ...state,
               user: action.user, 
            }
        case "ADD_TO_BASKET":
            // adds item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
                // return the current state with the "action" (the item) on the end
            }
            break;
        case "REMOVE_FROM_BASKET":
            // clone the basket
            let  newBasket = [...state.basket]
            // find the index of the obejct
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )

            if (index >= 0){
                // if the item exsists in the basket
                newBasket.splice(index, 1)
                // remove the item 
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as it is not in the basket`
                )
            }
            
            return { ...state, basket: newBasket }
            // return the new basket
            break;
        default:
            return state;
    }
}

export default reducer;