const InitState = {
    pageNum: 0
}

const rootReducer = (state = InitState, action) => {

  if (action.type === "UPDATE") {
      let pageUpdate = action.data;
      return{
        ...state,
        pageNum: pageUpdate
      }

  }
  return state;
};


export default rootReducer;