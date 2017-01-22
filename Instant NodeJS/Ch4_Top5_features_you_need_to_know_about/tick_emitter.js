// function event1Listener(a, b) {
//   console.log('got event1', a, b);
// }
// emitter.on('event1', event1Listener);

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var count = 0;

setInterval(function() {
  emitter.emit('tick', count);
  count ++;
}, 1000);

emitter.on('tick', function(count) {
  console.log('tick:', count);
});