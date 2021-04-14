import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Footer from './Footer'


class Armor extends Component {
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

    const armorList = armor.map(article => {
      return(
        <Grid item xs={2}>
          <div key={Math.random()}>
            <div className="center">
              <p> {article.name} </p>
            </div>
            <div className="center">
              <img src={article.pic} alt={article.name}  />
            </div>
          </div>
        </Grid>
      )
    })
    return (
      <div className="container">
        <h4 className="center">Armor</h4>
          <Grid container direction="row" justify="center" alignItems="flex-end">  
              { armorList }         
          </Grid> 
          <Footer />
      </div>
      
    )
  }
}

export default Armor