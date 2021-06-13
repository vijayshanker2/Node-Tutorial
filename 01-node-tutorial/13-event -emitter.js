const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('response',(str,id)=>{
  console.log(`data recieved: ${str} with id ${id}`)  
})

customEmitter.on('response',()=>{
    console.log(`Some Logic`)  
  })

customEmitter.emit("response","Data-1",123)