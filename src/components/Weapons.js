import React, { Component }from 'react'
import Footer from './Footer'
import Grid from '@material-ui/core/Grid';

class Weapons extends Component {
  
  render() {
  
    const weapons = [
      {
        name: "Daggers",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/dagger-icon.png"
      },
      {
        name: "Straight Swords",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/longsword-icon.png"
      },
      {
        name: "Greatswords",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/hollowslayer_greatsword-icon.png"
      },
      {
        name: "Ultra Greatswords",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/greatsword-icon.png"
      },
      {
        name: "Curved Swords",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/scimitar-icon.png"
      },
      {
        name: "Katanas",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/uchigatana-icon.png"
      },
      {
        name: "Curved Greatswords",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/carthus_curved_greatsword-icon.png"
      },
      {
        name: "Piercing Swords",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/estoc-icon.png",
      },
      {
        name: "Axes",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/battle_axe-icon.png"
      },
      {
        name: "Greataxes",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/greataxe-icon.png"
      },
      {
        name: "Hammers",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/mace-icon.png"
      },
      {
        name: "Great Hammers",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/vordts_great_hammer-icon.png"
      },
      { 
        name: "Fist & Claws",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/caestus-icon.png"
      },
      { 
        name: "Spears & Pikes",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/spear-icon.png"
      },
      {
        name: "Halberds",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/halberd-icon.png"
      },
      { 
        name: "Reapers",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/great_scythe-icon.png"
      },
      {
        name: "Whips",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/whip-icon.png"
      },
      {
        name: "Bows",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/longbow-icon.png"
      },
      {
        name: "Greatbows",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/onislayer_greatbow-icon.png"
      },
      {
        name: "Crossbows",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/knights_crossbow-icon.png"
      },
      {
        name: "Staves",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/sorcerers_staff-icon.png"
      },
      {
        name: "Flames",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/pyromancy_flame-icon.png"
      },
      {
        name: "Talismans",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/talisman-icon.png"
      },
      {
        name: "Sacred Chimes",
        pic: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/clerics_sacred_chime-icon.png"
      },
    ]

    const weaponsList = weapons.map((weapon, index) => {
      return(          
        <Grid item xs={2} key={index}>
          <div>
            <div className="center">
              <img src={weapon.pic} alt={weapon.name}/>
            </div>
            <div className="center">
              <p> {weapon.name} </p>
            </div>
          </div>
        </Grid>    
      )
    })
      
    
    return (
    <div className="container">
      <h4 className="center">Weapons</h4>
      <Grid container direction="row" justify="center" alignItems="flex-end">  
          { weaponsList }         
      </Grid> 
      <Footer />
    </div>
    )
  }
}


export default Weapons