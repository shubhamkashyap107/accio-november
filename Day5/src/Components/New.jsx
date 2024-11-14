import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { fetchData } from '../Utils/dataSlice'


const New = () => {


    const {status, items, error} = useSelector(store => store.data)
    const dispatch = useDispatch()

    useEffect(() => {
        if(status == "idle")
        {
            dispatch(fetchData())
        }
    })

    if(status == "loading")
    {
        return <h1>Loading...</h1>
    }

    if(status == "rejected")
        {
            return <h1>Error...</h1>
        }

  return (
    <div>
        {items && items.map((obj) => {
            const{name} = obj
            return <h3>{name}</h3>
        })}
    </div>
  )
}

export default New