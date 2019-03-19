const InitState = {
    pageNum: 0,
    binder:null,
    buttonType:null,
    menuCollapse:null
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

  if (action.type === "BUTTON") {
    return {
      ...state,
      buttonType: action.data
    }
  }

  if (action.type === "COLLAPSE") {
    return {
      ...state,
      menuCollapse: action.data
    }
  }

  return state;
};


export default rootReducer;