export const fetchBosses = () => {
  return dispatch => {
    dispatch({type: "LOADING"})
    
    fetch("http://localhost:3001/bosses")
      .then(resp => resp.json())
      .then(payload => dispatch({type: "SET_BOSSES", payload}))
  }
}

export const fetchBoss = (id) => {
  return dispatch => {
    dispatch({type: "LOADING"})
    
    fetch("http://localhost:3001/bosses/" + id)
      .then(resp => resp.json())
      .then(payload => dispatch({type: "SET_BOSS", payload}))
    
  }
}