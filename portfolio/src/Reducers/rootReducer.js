const InitState = {
    pageNum: 0,
    binder:null
}

const rootReducer = (state = InitState, action) => {
  
  if (action.type === "UPDATE") {
      return{
        ...state,
        pageNum: action.data
      } 
  }

  if (action.type === "BINDER") {
    return {
      ...state,
      binder: action.data
    }
  }
  return state;
};


export default rootReducer;