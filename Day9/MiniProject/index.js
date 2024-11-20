import fs, { read } from "fs"


// console.log(process.argv)
const command = process.argv[2]
const filename = process.argv[3]
const fileContent = process.argv[4]

const createFile = () => {
    if(!filename || !fileContent)
    {
        console.log("Please Enter valid file name and content")
        return
    }
    fs.writeFile(filename, fileContent, (err) => {
        if(err)
        {
            throw new err
        }
        console.log(`${filename} has been created successfully!`)
    })

}


const readFile = () => {
    if(!filename)
    {
        console.log("Please provide a file name")
        return
    }

    fs.readFile(filename, "utf8", (err, data) => {
        if(err)
        {
            console.log(err)
            return
        }
        else
        {
            console.log(data)
        }
    })
}

const updateFile = () => {
    if(!filename || !fileContent)
    {
        console.log("Please enter valid file and content")
        return
    }
    fs.appendFile(filename, `\n${fileContent}`, (err) => {
        if(err)
        {
            console.log(err)
            return
        }
        console.log("File Updated Sucessfully")
    })
}



const deleteFiles = () => {
    if(!filename)
    {
        console.log("Please Enter a valid file name")
        return
    }

    fs.unlink(filename, (err) => {
        if(err)
        {
            console.log(err)
            return
        }
        console.log(`${filename} deleted successfully`)
    })
}

const listFiles = () => {
    fs.readdir(".", (err, arr) => {

        if(err)
        {
            console.log(err)
            return
        }
        for(let item of arr)
        {
            console.log(item)
        }

    })
}


if(command == "create")
{
    createFile()
}
else if(command == "read")
{
    readFile()
}
else if(command == "update")
{
    updateFile()
}
else if(command == "delete")
{
    deleteFiles()
}
else if(command == "list")
{
    listFiles()
}





