import React, { useEffect, useState } from 'react'

const Home = () => {

  const[blogs, setBlogs] = useState([])


  useEffect(() => {

    fetch("http://localhost:8080/blogs")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setBlogs(data)
    })

  }, [])

  return (
    <div className=''>
      
    {blogs && blogs.map((item) => {
      return (
      <div className='border w-2/6 mt-2 p-2 bg-pink-200'>
        {item.content}
      </div>
    )})}

    </div>
  )
}

export default Home