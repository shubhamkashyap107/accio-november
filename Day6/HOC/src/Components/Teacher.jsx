import React from 'react'
import Box from './Box'


const Teacher = ({name}) => {
  if(name == "Shubham")
  {
    return <div style={{border : "5px solid gold"}}>

        <Box name={name} />
    
    </div>
  }
  else
  {
    return <div style={{border : "5px solid pink"}}>
        <Box name={name} />
    </div>
  }
}

export default Teacher