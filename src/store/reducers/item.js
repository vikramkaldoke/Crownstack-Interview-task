import {SET_PRODUCT} from '../actions/item';

const initialState = {
  songs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT: {
      return {
        songs: action.products,
      };
    }
  }
  return state;
};
