const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        ...payload,
        qty: payload.qty + 1,
      };
      break;
    case 'REMOVE_FROM_CART':
      return { ...state, ...payload, qty: payload.qty - 1 };
      break;
    case 'ADD_TOTAL':
      return {
        ...state,
        total:  payload.reduce((acc, price) =>{
         acc+price, 0
          
        }
      };
      break;
    case 'INCREASE_QTY':
      return { qty: payload.qty+1||1 };
      break;
    case 'DECREASE_QTY':
      return { qty: payload.qty - 1 };
      break;
    default:
      return state;
  }
};
