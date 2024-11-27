import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"

const Home = () => {

  const[blogs, setBlogs] = useState([])
  const navigate = useNavigate()


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
    <div className='border mx-auto w-6/12 mt-8 p-4 h-[70vh]  overflow-scroll'>
      
    {blogs && blogs.map((item, index) => {
      console.log(item)
      return (
      <div className='border mt-2 p-4 rounded-lg bg-pink-200 flex justify-between'>
        <div>

        <p className=''>{item.content}</p>
        <span>-{item.name}</span>
        
        </div>


      <div>

      <button onClick={() => {
        navigate(`/show/${item.id}`)
      }}  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">👀</button>

        <button onClick={() => {
          navigate(`/edit/${item.id}`)
        }} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">✏️</button>


        <button onClick={() => {
          async function delData(){
            await fetch(`http://localhost:8080/delete/${item.id}`, {
              method : "DELETE"
            })
          }
          delData()

          // navigate("/")
          // window.location.reload()

          let filteredArray = blogs.filter((i) => {
            return i.id != item.id
          })

          setBlogs(filteredArray)


          
        }} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">🗑️</button>
      
      </div>
      
      </div>
    )})}

    </div>
  )
}

export default Home