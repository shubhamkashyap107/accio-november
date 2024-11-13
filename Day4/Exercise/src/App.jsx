import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addData } from './Utils/dataSlice'


const App = () => {

  const dispatch = useDispatch()
  const[val, setVal] = useState("")
  const sliceData = useSelector(store => store.data)

  return (
    <div>
      <input placeholder='Enter your data' value={val} onChange={(e) => {
        setVal(e.target.value)
      }} />

      <button onClick={() => {

        if(!val) return

        dispatch(addData(val))

        setVal("")
      }}>Add to store</button>



      <ul>
        {sliceData && sliceData.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
      

    </div>
  )
}

export default App