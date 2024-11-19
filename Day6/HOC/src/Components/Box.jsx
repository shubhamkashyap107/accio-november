import React from 'react'

const Box = ({name}) => {

    const styleObj = {
        backgroundColor : "yellow",
        height : "100px",
        width : "100px",
        border : "1px solid black"
    }

  return (
    <div style={styleObj}>{name}</div>
  )
}

export default Box