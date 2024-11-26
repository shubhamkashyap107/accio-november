import express from "express"
import cors from "cors"

const app = express()


const blogs = [
    
]

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/blogs", (req,res) => {
    res.status(200).json(blogs)
})


app.post("/new", (req, res) => {
    console.log(req.body)
    blogs.push(req.body)
    res.status(200).send("OKAY")
})









app.listen(8080, () => {
    console.log("Server connected to PORT 8080")
})