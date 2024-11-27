import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"

const Edit = () => {
 const{id} =  useParams()
//  console.log(id)



  const navigate = useNavigate()
  const[author, setAuthor] = useState("")
  const[content, setContent] = useState("")


  useEffect(() => {
    async function getData(){
      let res = await fetch(`http://localhost:8080/edit/${id}`)
      let data = await res.json()
      setAuthor(data.name)
      setContent(data.content)
    }

    getData()
  }, [])

  return (
    <div className='border flex flex-col w-2/6 p-4 mx-auto mt-40 rounded-lg bg-orange-300 '>

      <input onChange={(e) => {
        setAuthor(e.target.value)
      }}  value={author} type='text' placeholder='Author Name' className='border p-2  rounded-lg' />
      <textarea onChange={(e) => {
        setContent(e.target.value)
      }} value={content} type="text" placeholder='Enter your content' className='border p-2  rounded-lg mt-2' ></textarea>
      
      
      <button onClick={() => {

        async function fun(){
          await fetch("http://localhost:8080/edit", {
            headers: {
              "Content-Type": "application/json",
            },
            method : "POST",
            body : JSON.stringify({
              name : author,
              content : content,
              id : id
            })
          })

          navigate("/")
        }

        fun()
      }} type="button" className="mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-[100px]">Add Blog</button>
    </div>
  )
}

export default Edit