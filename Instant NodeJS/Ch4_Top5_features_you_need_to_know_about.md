# Top 5 features you need to know about


<!-- toc orderedList:0 depthFrom:1 depthTo:6 -->

* [Top 5 features you need to know about](#top-5-features-you-need-to-know-about)
  * [User modules](#user-modules)
  * [Node Package Manager (NPM)](#node-package-manager-npm)
  * [The callback pattern](#the-callback-pattern)
    * [Chaining I/O](#chaining-io)
  * [Event emitter](#event-emitter)
    * [Parallelizing I/O](#parallelizing-io)
  * [Streams](#streams)
    * [The readable streams](#the-readable-streams)
    * [The writable streams](#the-writable-streams)
    * [The duplex streams](#the-duplex-streams)
    * [Stream flow control](#stream-flow-control)
    * [Piping](#piping)
    * [The transform streams](#the-transform-streams)

<!-- tocstop -->



In the last section, we included the http module in the local application by using the require function, passing it a name of the module you wish to include. This function can be used for including and using any other module that Node.js comes with. Here is a short list of some of the core modules:

* **net:** For creating TCP clients and servers  
* **http:** For creating and consuming HTTP services  
* **fs:** For accessing and manipulating fies  
* **dns:** For using the DNS service  
* **events:** For creating event emitters  
* **stream:** For creating streams  
* **os:** For accessing some local operating system statistics  
* **assert:** For assertion testing  
* **util:** For miscellaneous utilities  

You can, for instance, import the fs module into a local variable by running the following module in your JavaScript code:
```js
var fs = require('fs');
```

## User modules

## Node Package Manager (NPM)

## The callback pattern

### Chaining I/O

## Event emitter

### Parallelizing I/O

## Streams

### The readable streams

### The writable streams

### The duplex streams

### Stream flow control

### Piping

### The transform streams
