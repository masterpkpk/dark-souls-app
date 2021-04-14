const initialState = {
  loading:true, 
  bosses: [],
  comments: [],
  weapons: [],
  armor: []
}

const darkSoulsReducer = (state=initialState, action) => {
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
    case "SET_COMMENTS":
      return {
        ...state, 
        loading: true,
        comments: action.payload
      }
    case "SET_WEAPONS":
      return {
        ...state,
        loading: true,
        weapons: action.payload
      }
    default:
      return state;
  }
}

export default darkSoulsReducer;