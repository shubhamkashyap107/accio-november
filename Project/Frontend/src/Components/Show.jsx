import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {

    const{id} = useParams()


    const[showBlogs, setShowBlog] = useState()

    useEffect(() => {
        async function getData(){
            const res = await fetch(`http://localhost:8080/show/${id}`)
            const data = await res.json()
            console.log(data)
            setShowBlog(data)
        }

        getData()
    })

  return (
    <div className='border bg-pink-200 p-4 w-4/12 mx-auto mt-48'>
        <p>{showBlogs && showBlogs.content}</p>
        <p>{showBlogs && showBlogs.name}</p>
    </div>
  )
}

export default Show