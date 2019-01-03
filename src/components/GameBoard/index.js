import React from 'react'

export default function GameBoard(props) {
  return (
    <div className="container my-3">
      <div className="row">
        {props.children}
      </div>
    </div>
  )
}
