const initialState = {
  bosses: []
}

const bossesReducer = (state=initialState, action) => {
  switch(action.type) {
    case "SET_BOSS":
      return {
        ...state,
        boss: action.payload
      }
    case "SET_BOSSES":
      return {
        ...state,
        bosses: action.payload
      }
    default:
      return state;
  }
}

export default bossesReducer;