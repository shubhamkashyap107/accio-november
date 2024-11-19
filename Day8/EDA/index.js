import EventEmitter from "events"


const ee = new EventEmitter()


ee.on("Greet", (name) => {
    console.log("Hello, " + name)
})

ee.on("ExampleEvent", (arr) => {
    for(let item of arr)
    {
        console.log(item)
    }
})

// ee.emit("Greet", "Sameer")


ee.emit("ExampleEvent", ["A", "B", "C"])