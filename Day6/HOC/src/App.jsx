import React from 'react'
import Box from './Components/Box'
import Teacher from './Components/Teacher'
import{useNewHook} from "./Utils/useNewHook"
import {useFetchData} from "./Utils/useFetchData"
import Example from './Components/Example'
import Render from './Components/Render'


const App = () => {

  // const{value, setValue} = useNewHook([])

  // useFetchData("https://hp-api.onrender.com/api/characters")
  // .then((data) => {
  //   setValue(data)
  // })

  
  return (
    <div>
      {/* <Box name={"Nilesh"} />
      <Box name={"Shubham"} />
      <Box name={"Srijan"} />
      <Box name={"Neelam"} />
      <Box name={"Annu"} />
      <Box name={"Sovan"} /> */}

{/* 
      <Teacher name={"Anil"} />
      <Teacher name={"Sovan"} />
      <Teacher name={"Srijan"} />
      <Teacher name={"Annu"} />
      <Teacher name={"Pintu"} />
      <Teacher name={"Shubham"} /> */}

      {/* <p>{value}</p>

      <button onClick={() => {
        setValue("HEHE")
      }}>CLick me</button>
       */}
{/* 
       {value && value.map((item) => {
        return <p>{item.name}</p>
       })} */}


    <Example render={Render} />

    </div>
  )
}

export default App