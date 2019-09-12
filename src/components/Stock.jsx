import React from 'react';

function Stock (props){
  return(
    <div className="stock-display">
      <h5>props.stock.symbol</h5>
      <h5>props.stock.price</h5>
    </div>
  )
}

export default Stock
