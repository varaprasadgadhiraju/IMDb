//Reducers alter the state of store!
const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
            ...state, //previous state!
            user:action.payload 
        };
      case 'LOGOUT':
          return {
              ...state,
              user:action.payload
          }
      case 'GET_TOP_MOVIES':{
          return {
              ...state,
              movies:action.payload
          }
      }
      case 'GET_POPULAR_MOVIES':{
          return {
              ...state,
              movies:action.payload
          }
      }
      case 'ERROR':{
          return {
              error:action.payload
          }
      }
      default:
        return state;
    }
};

export default reducer;