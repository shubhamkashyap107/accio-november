// import fs from "fs"




// fs.readFile("example.txt", "utf8", (err, data) => {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log(data)
//     }
// })



// console.log("OKAY")




// console.log("okay")
// setTimeout(() => {
//     console.log("Hello")
// })
// console.log("Bye")




// import fs from "fs/promises"


// fs.readFile("example.txt", "utf8")
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// }) 


// console.log("OKAY")

//pending, fulfilled, rejected

// let p1 = new Promise((resolve, reject) => {
//     let dataFromAPI = false

//     if(dataFromAPI == true)
//     {
//         resolve({name : "Chotu"})
//     }
//     else
//     {
//         reject("Error, API didn't work")
//     }
// })

// p1
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })


// import fs from "fs/promises"


// async function readFile()
// {
//     try {
//         const data = await fs.readFile("exaojsndliuhsdmple.txt", "utf8")
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
   

// }
// readFile()


// console.log("OKAY")


// import fs from "fs/promises"

// async function fetchAndSaveData() {
//     try {
//         const response = await fetch('https://dummyjson.com/products');
//         const data = await response.json();
//         await fs.writeFile("data2.json", JSON.stringify(data))
//         console.log("Data Saved")
//     } catch (error) {
//         console.log('Error fetching data:', error);
//     }
// }
// fetchAndSaveData();


import fs from "fs/promises"
// import fetch from 'node-fetch';
async function fetchAndSaveData() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        await fs.writeFile("data2.txt", data)
        console.log("Data Saved")
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}
fetchAndSaveData();