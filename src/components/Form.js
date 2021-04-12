import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComment } from '../actions'

class Form extends Component {
  

  state = {
    content: "",
    boss_id: this.props.boss_id
   
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props)
    this.props.addComment(this.state, this.props.history)
    this.setState({
      content: "",
      boss_id: this.props.boss_id
    })
    
  }
  
  render() {
    
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="comment">Comment</label>
          <input className="commentBox" type="text" name="content" value={this.state.content} onChange={ this.handleChange }/>
          <div className="container center">
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}


export default connect(null, { addComment })(Form);