# Amazon Clone React

## React Context Api

### Creating StateContext

```javascript
import React, { createContext, useContext, useReducer} from 'react';

export const StateContext=createContext();

export const StateProvider=({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
export const useStateValue=()=> {
    return useContext(StateContext)
}
```

### Creating Reducer
export const initialState = {
  basket: []
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
```

### Using StateProvider in Index.js

```javascript
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

rectDom.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

