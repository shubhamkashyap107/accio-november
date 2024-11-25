import express from "express"
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended : true}))

// app.use( (req, res, next) => {
//     let isLoggedIn = true


//     if(isLoggedIn)
//     {
//         next()
//     }
//     else
//     {
//         res.send("Please Log in first")
//     }
// })

app.get("/home", (req, res) => {
    res.status(200).send("This is the root/home route")
})

app.get("/about", (req, res) => {
    res.send("Hello my name is this and that")
})


app.post("/users", (req, res) => {
    console.log(req.body)
    res.send("Hello from the users route")
})


app.listen(8080, () => {
    console.log("Server Connected to port 8080")
})