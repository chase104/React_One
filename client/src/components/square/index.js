import React from 'react';
import './index.css'

const Square = (props) => {
    console.log(props);
  return (
    <div className="square">Square {props.num}</div>
  )
}

export default Square;


