const initialState = {
  loading:true, 
  bosses: [],
  comments: []
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
    case "ADD_COMMENT":
      return{
        ...state,
        
        comments: [...state.comments, action.comment]
      }
   
    default:
      return state;
  }
}

export default bossesReducer;