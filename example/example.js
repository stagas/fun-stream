
/**
 * Example.
 */

var fun = require('../');
var Stream = require('stream');
var through = require('through');

function createStream(){
  var stream = new Stream;
  stream.readable = true

  var count = 0;
  var interval = setInterval(function(){
    stream.emit('data', count);
    if (5 == ++count) {
      stream.emit('end');
      clearInterval(interval);
    }
  }, 1000);

  return stream;
}

var stdout = fun(process.stdout);
var stream = fun(createStream());
var decimal = fun(through(function(n){
  this.queue(n.toString(2));
}));
var carriage = fun(through(function(s){
  this.queue(s+'\n');
}));

stdout(carriage(decimal(stream)));
