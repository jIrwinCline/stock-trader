import React, { Component } from 'react'
import Stocks from './Stocks'

export default class Body extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <StocksList/>
      <Chart/>
      <CryptosList/>
      <IndustriesList/>
      </div>
    )
  }
}
