import express from "express"
import cors from "cors"
import { v4 as uuid } from 'uuid';


const app = express()


let blogs = [
    
]

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/blogs", (req,res) => {
    res.status(200).json(blogs)
})


app.post("/new", (req, res) => {
    // console.log(req.body)
    // blogs.push(req.body)


    const{name, content} = req.body
    let newObj = {
        name : name, 
        content : content,
        id : uuid() // guaranteed to return a unique ID
    }

    blogs.push(newObj)
    
    res.status(200).send("OKAY")
})


app.delete("/delete/:id", (req, res) => {

    const{id} = req.params

 
    let filteredArray = blogs.filter((item) => {
        return item.id != id
    })

    blogs = filteredArray
    
    res.status(200).send("Deleted")
})


app.get("/edit/:id", (req, res) => {
    let{id} = req.params


    let foundBlog = blogs.find((item) => {
        return item.id == id
    })


    res.json(foundBlog)
})

app.post("/edit/", (req, res) => {
    const{name, content, id} = req.body

    console.log(id)
    let filteredArray = blogs.filter((item) => {
        return item.id != id
    })

    filteredArray.push({name : name, content : content, id :id})

    blogs = filteredArray 

    console.log(blogs)
    res.status(200).send("OKAY")
})


app.get("/show/:id", (req, res) => {
    const{id} = req.params

    let foundBlog = blogs.find((item) => {
        return item.id == id
    })


    res.json(foundBlog)
})








app.listen(8080, () => {
    console.log("Server connected to PORT 8080")
})