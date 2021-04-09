const initialState = {
  loading:true, 
  bosses: []
}

const bossesReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      }
    
    case "SET_BOSS":
      return {
        ...state,
        loading: false,
        boss: action.payload
      }
    case "SET_BOSSES":
      return {
        ...state,
        loading: false,
        bosses: action.payload
      }
    default:
      return state;
  }
}

export default bossesReducer;