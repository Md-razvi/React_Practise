import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <div id="buttons">
      <button style={props.style}>
        {props.icons}
        {props.name}</button>
    </div>
  )
}

export default Button
