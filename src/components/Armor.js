import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Footer from './Footer'

class Armor extends Component {
  
  state = {
    Helms: 0,
    Leggings: 0,
    Gauntlets: 0,
    Chests: 0,
    count: 1
  }
  increaseCount = (e) => {
    
    this.setState((state) => ({
      [e.target.name]: state[e.target.name] + state.count
   }))
   console.log(this.state)
  }

  handleChange = (e) => {
    const num = parseInt(e.target.value)
    this.setState({
      [e.target.name]: num
      
    })
    
  }

 
  render () {
  

    const armor = [
      {
        name: "Helms",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/wolf_knight_helm-icon.png"
      },
      {
        name: "Chests",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/black_knight_armor-icon.png"
      },
      {
        name: "Gauntlets",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/smough's_gauntlets-icon.png"
      },
      {
        name: "Leggings",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/executioner_leggings-icon.png"
      }
    ]


    //create button
    //link button to object
    //give object count
    //on click increase objects count
    const armorList = armor.map((article, index) => {
      return(
        <Grid item xs={2} key={index} >
          <div>
            <div className="center">
              <img src={article.pic} alt={article.name}  />
            </div>
            <div className="center">
              <p> {article.name} </p>
            </div>
            <button onClick={this.increaseCount} name={article.name}>Like {this.state[article.name]}</button>
          </div>
        </Grid>
      )
    })
    return (
      <div className="container">
        <h4 className="center">Armor</h4>
        <form > 
          <input type="text" name="count" value={this.state.count} onChange={this.handleChange}/>
          
        </form>
          <Grid container direction="row" justify="center" alignItems="flex-end">  
              { armorList }         
          </Grid> 
          <Footer />
      </div>
      
    )
  }
}

export default Armor