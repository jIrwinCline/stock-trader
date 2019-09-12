import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Header from './components/Header'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      stocks: {},
      sectors: {}
    }
  }

  makeApiCall = () => {

    // kind of redundant but doing two fetch calls just to tweak them separately
    // tried implementing an object with multiple urls but better for it to just work
    console.log("making api call");

    // getting the sectors
    fetch(`https://www.alphavantage.co/query?function=SECTOR&apikey=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(
      (result) => {


        let tempState = this.state

        this.setState({
          isLoaded:true,
          stocks: tempState.stocks,
          sectors: result
        });

      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
    .then( () =>{
      console.log("state in sector growth / loss ", this.state)}
    )

    fetch(`https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=AAPL,MSFT,TSLA,AMZN,NFLX,NVDA,GOOG,ADBE,FB&apikey=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(
      (result) => {

        // shallow copy of state
        let tempState = this.state

        this.setState({
          isLoaded:true,
          stocks: result,
          sectors: tempState.sectors
        });

      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
    .then( () => {
      console.log("state in stock quote prices ", this.state)}
    )
  }

  componentDidMount = () => {
    this.makeApiCall();
    this.apiTimer = setInterval( () => {
      this.makeApiCall()},
      60 * 1000)

  }

  componentWillUnmount() {
    clearInterval(this.apiTimer);
  }

  render(){
    return(<Header/>)
  }


}

export default App;
