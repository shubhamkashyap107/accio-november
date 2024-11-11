import React, { useState } from 'react'
import {Provider, useDispatch, useSelector} from "react-redux"

import { addData, removeData } from './Utils/exampleSlice'

const App = () => {

  const dispatch = useDispatch()
  const[text, setText] = useState("")
  const storeData = useSelector((store) => {
    return store.example
  })

  console.log(storeData)
  return (


    <div>
      <input type="text" value={text} onChange={(e) => {
        setText(e.target.value)
      }} />
      <button onClick={() => {
        if(!text)return 
        dispatch(addData(text))
        setText("")
      }}>Click me</button>



      <ul>
        {storeData.map((item) => {
          return <li onClick={() => {
            dispatch(removeData(item))
          }}>{item}</li>
        })}
      </ul>



    </div>


  )
}

export default App