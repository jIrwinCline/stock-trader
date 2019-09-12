import React, { Component } from 'react'
import Stock from './Stock'


export default class StocksList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("This is props stocks in stockslist", this.props.stocks['Stock Quotes'])
    const stocks = this.props.stocks['Stock Quotes']
    // const stocksList = stocks.map( (stock) => {
    //   <Stock stock={stock} />
    //     })

    return (
      <div className="stocks-list-display">

      </div>
    )
  }
}
