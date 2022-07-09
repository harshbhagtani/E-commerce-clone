import {
  ADD_ADRESS,
  ADD_DATA_TO_BASKET,
  ADD_TO_BASKET,
} from "../actions/actiontypes";

const initialstate = {
  basketItems: [],
  adress: {},
};

export default function basket(state = initialstate, action) {
  // console.log("hi");
  if (action.type == ADD_TO_BASKET) {
    return {
      ...state,
      basketItems: [...state.basketItems, action.item],
    };
  } else if (action.type == ADD_DATA_TO_BASKET) {
    return {
      ...state,
      basketItems: [...action.item],
    };
  } else if (action.type == ADD_ADRESS) {
    return {
      ...state,
      adress: action.item,
    };
  }

  return state;
}
