// import fs from "fs"

// fs.readFile("A.txt", "utf8" , (err, data) => {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log(data)
//     }
// })

// let data = fs.readFileSync("A.txt", "utf8")
// console.log(data)



// fs.writeFile("A.txt", "mai kuch nhi jaanta", (err) => {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log("File written successfully")
//     }

// })


// fs.writeFileSync("A.txt", "qwe.kjsdbhf;khjsadfrty")


// fs.appendFile("A.txt", "\nholi hai", (err) => {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log("Data appended")
//     }
// })


// fs.appendFileSync("A.txt", "\nthis is the new data")

// fs.mkdir("NewFolder10", (err) => {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log("Directory created successfully")
//     }
// })


// fs.mkdirSync("NF11")


// fs.readdir(".", (err, files) => {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log(files)
//     }
// })


// const files = fs.readdirSync("..")
// console.log(files)




// console.log("OK")


// let data = fs.readFileSync("src.txt", "utf8")
// fs.writeFileSync("des.txt", data)

// import fs from "fs.promises"


const fs = require("fs").promises

async function readFile()
{
    try {
        const data = await fs.readFile("A.txt", "utf8")
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

readFile()
console.log("OK")