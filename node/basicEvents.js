// Basic event-driven 
//Node Js can have most usage of events
//Here we create an interface and pass,call perform methods 

// Most commonly we have two methods as 'on' and 'emit'
// on -> it refers to the data reference listening.
// emit -> It refers just to emit the data.
//The process is first need to listen response then need to emit the data

const EventEmitter = require('events')

const customeEmitter = new EventEmitter()

customeEmitter.on('response',()=>{
    console.log(`data received`)
})
// We can have any number of listener it will prints

customeEmitter.on('response',(name,age)=>{
    console.log(`The data received for ${name} with age of ${age}`)
})

// The string which passes to emit should match the string passed on the event
// it is not specific to the arguments it's just based on the listenings.
customeEmitter.emit('response','haary',12);