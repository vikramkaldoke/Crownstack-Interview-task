export const SET_PRODUCT = 'SET_PRODUCT';

export const fetchProducts = () => {
  return async (dispatch) => {
    try{
      const response = await fetch(
        'https://itunes.apple.com/search?term=Michael+jackson',
      );
      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      const resData = await response.json();
      dispatch({type:SET_PRODUCT,products:resData.results});
    }catch(err) {
      throw err;
    }
  };
};



