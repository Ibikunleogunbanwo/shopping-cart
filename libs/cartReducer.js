
export const initialState = { cart: [] };//initial state

  //Reducer Function
export const manageCart = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM": {
        const itemToAdd = action.payload;
        const exist = state.cart.find(product => product.id === itemToAdd.id);
        if (exist) {
          return {
            ...state,
            cart: state.cart.map(product =>
              product.id === itemToAdd.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...itemToAdd, quantity: 1 }],
          };
        }
      }
  
      case "REMOVE_ITEM": {
        const itemToRemove = action.payload;
        const exist = state.cart.find(product => product.id === itemToRemove.id);
        if (exist) {
          if (exist.quantity > 1) {
            return {
              ...state,
              cart: state.cart.map(product =>
                product.id === itemToRemove.id
                  ? { ...product, quantity: product.quantity - 1 }
                  : product
              ),
            };
          } else {
            return {
              ...state,
              cart: state.cart.filter(product => product.id !== itemToRemove.id),
            };
          }
        }
        return state;
      }
      
      case "INNIT": {
        return action.payload

      }
  
      case "CLEAR_CART": {
        return initialState;
      }
  
      default:
        return state;
    }
  };