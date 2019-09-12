import React, { Component } from 'react'
import StocksList from './StocksList'
import Chart from './Chart'

class Body extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <StocksList stocks={this.props.stocks}/>
      <Chart/>
      </div>
    )
  }
}

export default Body;


// <CryptosList/>
// <IndustriesList/>
