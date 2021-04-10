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

export const addComment = (comment, history) => {
  
  return dispatch => {
    fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({ comment })
    })
    .then(r => r.json())
    .then(comment => {
      dispatch({ type: "ADD_COMMENT", comment})
      history.push(history.location.pathname) 
    })
  }
}

