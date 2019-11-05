import React, {Component} from 'react';

import ProductData from './ProductDataObj';

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

    productData : ProductData,

    flag : true
  }


  updateWatch = (pos) => {
    let updatedWatch = this.state.currentWatch;
    updatedWatch.currentLink = this.state.productData.colorOptions[pos].imageUrl;
    updatedWatch.currentAlt = this.state.productData.colorOptions[pos].styleName;

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

    let Thumbnails = isArrayEmpty(this.state.productData.colorOptions) ? [] : this.state.productData.colorOptions.map((item,pos) => {
      return (
        <Element updateWatch = {()=> this.updateWatch(pos)} imageUrl = {item.imageUrl} styleName = {item.styleName} key={pos+1} />
      )
    });

    return (
      <div className="App">
        <header>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png" alt="logo" className={classes.Logo} />
        </header>
        <div className = {classes.Main}>
          <div className = {classes.LeftSide}>

            {this.state.flag ? this.TimeElement : this.HeartRate}

            <img src={this.state.currentWatch.currentLink} alt={this.state.currentWatch.currentAlt} /> 

          </div>

          <div className = {classes.RightSide}>

            <h1>{this.state.productData.title}</h1>
            <p>{this.state.productData.description}</p>

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
