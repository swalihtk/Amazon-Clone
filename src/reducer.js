export const initialState = {
  basket: [
      {
          id: "12323",
          image: "https://m.media-amazon.com/images/I/91tcQv06iPS._AC_UL480_FMwebp_QL65_.jpg",
          title: "Bare Home Queen Sheet Set - 1800 Ultra-Soft Microfiber Queen Bed Sheets - Double Brushed - Queen Sheets Set - Deep Pocket - Bedding",
          price: 160,
          rating: 3
      }
  ]
};

export const getTotalBasketPrice=(basket)=> basket?.reduce((amount, item)=> item.price+amount, 0);


function reducer(state, action) {
    console.log(action)
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for add
        return {
            ...state,
            basket:[...state.basket, action.item]
        }
          break;
      case "REMOVE_FROM_BASKET":
      // logic for remove
        let newBasket=[...state.basket];
        let index=state.basket.findIndex(item=> item.id==action.id);
        if(index>=0){
            newBasket.splice(index, 1);
        }else{
            console.warn(`can't remove the product (id: ${action.id}) from the basket`);
        }
        return {...state,
            basket: newBasket
        };
          break
    default:
      return state;
  }
}

export default reducer;
