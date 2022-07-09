import { ADD_ADRESS, ADD_DATA_TO_BASKET, ADD_TO_BASKET } from "./actiontypes";

export function addToBasket(data) {
  return {
    type: ADD_TO_BASKET,
    item: data,
  };
}

export function addIntialBasket(data) {
  return {
    type: ADD_DATA_TO_BASKET,
    item: data,
  };
}
export function updateAdress(data) {
  return {
    type: ADD_ADRESS,
    item: data,
  };
}
