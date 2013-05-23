
# fun-stream

functional streams decorator

## Example

```js
var fun = require('fun-stream');
var Stream = require('stream');

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

stdout(stream);
```

## License

MIT
