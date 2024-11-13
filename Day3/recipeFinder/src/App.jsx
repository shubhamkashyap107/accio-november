import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addSearchResult } from './Utils/SearchSlice';


const arr = [
  ["strIngredient1", "strMeasure1"],
  ["strIngredient2", "strMeasure2"],
  ["strIngredient3", "strMeasure3"],
  ["strIngredient4", "strMeasure4"],
  ["strIngredient5", "strMeasure5"],
  ["strIngredient6", "strMeasure6"],
  ["strIngredient7", "strMeasure7"],
  ["strIngredient8", "strMeasure8"],
  ["strIngredient9", "strMeasure9"],
  ["strIngredient10", "strMeasure10"],
  ["strIngredient11", "strMeasure11"],
  ["strIngredient12", "strMeasure12"],
  ["strIngredient13", "strMeasure13"],
  ["strIngredient14", "strMeasure14"],
  ["strIngredient15", "strMeasure15"],
  ["strIngredient16", "strMeasure16"],
  ["strIngredient17", "strMeasure17"],
  ["strIngredient18", "strMeasure18"],
  ["strIngredient19", "strMeasure19"],
  ["strIngredient20", "strMeasure20"]
];




const App = () => {

  const dispatch = useDispatch()

  const[query, setQuery] = useState("")

  const[data, setData] = useState([])

  const[showLoader, setShowLoader] = useState(false)

  const searchData = useSelector(store => store.search)


  return (
    <div className='row border vh-100'>
      <div className='col-6 p-4'>
        <div className='border p-2'>

        <label htmlFor="ip" className='form-label'>Enter your dish's name</label>
        <input value={query} id='ip' type="text" className='form-control' placeholder="Pasta" onChange={(e) => {
          setQuery(e.target.value)
        }} />
        
        </div>
        <button onClick={async() => {




          setData([])
          setShowLoader(true)

          const foundItem = searchData.find((item) => {
            return item.query == query
          })


          if(foundItem)
          {
            setData(foundItem.meals)
            return
          }


          if(!query)
          {
            return
          }
          const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + query)
          const json = await data.json()
          if(json.meals == null) return 

          setData(json.meals)
          dispatch(addSearchResult({query : query, meals : json.meals}))
          console.log(json)
        }} className='btn-success btn mt-2'>Search</button>
      </div>
      <div className='col-6 border h-100 '>
        {data.length == 0 ? (showLoader ? <Loader /> : "") : data.map((item) => {
          let ingredients  = ""

          for(let i of arr)
          {
            let igr = item[i[0]]
            let mes = item[i[1]]

            if(!igr || !mes)
            {
              break
            }

            ingredients += igr + " : " + mes + ", "
            
          }

          ingredients = ingredients.slice(0,-2)

          return <div className='border p-4' style={{backgroundColor : "lightblue", marginTop : "100px"}} >
            <p className='border p-1'>{ingredients}</p>
            <p className='border p-1'>{item.strInstructions}</p>
          </div>
        })}

      </div>
    </div>
  )
}

export default App


const Loader = () => {
  
  return (
    <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
  )
  
}