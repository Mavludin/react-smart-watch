import React, {Component} from 'react';

import Element from './Elements';
import {TimeElement, HeartRate} from './Time and HeartRate';
import isArrayEmpty from "./ArrayCheck";

import './App.css';
import classes from './Elements.module.css';

class App extends Component {

  state = {
    currentWatch : {
      currentLink: 'https://imgur.com/xSIK4M8.png',
      currentAlt : 'Purple Strap'
    },

    flag : true
  }

  ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
  }

  updateWatch = (pos) => {
    let updatedWatch = this.state.currentWatch;
    updatedWatch.currentLink = this.ProductData.colorOptions[pos].imageUrl;
    updatedWatch.currentAlt = this.ProductData.colorOptions[pos].styleName;

    this.setState({currentWatch: updatedWatch});
  }

  ShowTime = () => {
    this.setState({flag : true});
  }
  
  ShowHeartRate = () => {
    this.setState({flag : !this.state.flag});
  }

  TimeElement = <TimeElement />
  HeartRate = <HeartRate />

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Next State =>', nextState);
    console.log('Current State =>', this.state);

    // if (nextState.currentWatch.currentAlt === this.state.currentWatch.currentAlt) {
    //   return false;
    // }

    return true;
  }

  render () {

    let Thumbnails = isArrayEmpty(this.ProductData.colorOptions) ? [] : this.ProductData.colorOptions.map((item,pos) => {
      return (
        <Element updateWatch = {()=> this.updateWatch(pos)} imageUrl = {item.imageUrl} styleName = {item.styleName} key={pos+1} />
      )
    });

    return (
      <div className="App">
        <div className = {classes.Main}>
          <div className = {classes.LeftSide}>

            {this.state.flag ? this.TimeElement : this.HeartRate}

            <img src={this.state.currentWatch.currentLink} alt={this.state.currentWatch.currentAlt} /> 

          </div>

          <div className = {classes.RightSide}>

            <h1>{this.ProductData.title}</h1>
            <p>{this.ProductData.description}</p>

            <h3>Select Color</h3>
            <div className = {classes.Thumbnails}>
              {Thumbnails}
            </div>

            <h3>Features</h3>
            <button onClick = {this.ShowTime} className = {this.state.flag ? classes.ActiveOne : null}>Time</button>
            <button onClick = {this.ShowHeartRate} className = {!this.state.flag ? classes.ActiveOne : null}>Heart Rate</button>
            <button className = {classes.BuyBtn}>Buy Now</button>

          </div>
        </div>
      </div>
    );
  }

}

export default App;
