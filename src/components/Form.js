import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComment } from '../actions'
import Button from '@material-ui/core/Button';


class Form extends Component {
  
  state = {
    content: "",
    boss_id: this.props.boss_id
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      boss_id: this.props.boss_id
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  
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
          
          <input className="commentBox" type="text" name="content" value={this.state.content} onChange={ this.handleChange }/>
          <div className="container center">
          <Button onClick={ this.handleSubmit } variant="contained" color="primary">Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addComment })(Form);